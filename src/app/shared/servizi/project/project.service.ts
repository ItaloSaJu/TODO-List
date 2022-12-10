import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http : HttpClient) { }

  all(){
    return this.http.get<project[]>('http://localhost:3000/project')
  }
}
