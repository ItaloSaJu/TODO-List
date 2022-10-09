import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProgettiService {

  constructor(private http : HttpClient) { }


  all(){
    return this.http.get<project[]>(`http://localhost:3000/project/`)
  }

  delete(id : number){
    return this.http.delete<project>(`http://localhost:3000/project/${id}`)
  }

  getId(id: number){
    return this.http.get<project>(`http://localhost:3000/project/`+ id)
  }

  post(project : project){
    return this.http.post<project>(`http://localhost:3000/project/`, project)
  }
  update(id: number , project : project){
    return this.http.put<project>(`http://localhost:3000/project/${id}`, project)
  }


}
