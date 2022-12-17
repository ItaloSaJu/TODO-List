import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http : HttpClient) { }



  all(){
    return this.http.get<project[]>('http://localhost:3000/project')
  }

  getId(id: number){
    return this.http.get<project>(`http://localhost:3000/project/`+ id)
  }

  addProject(project : project){
    return this.http.post<project[]>('http://localhost:3000/project', project)
  }

  update(id: number , project : project){
    return this.http.put<project>(`http://localhost:3000/project/${id}`, project)
  }
}
