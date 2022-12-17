import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { task } from '../../models/task';

@Injectable({
  providedIn: 'root'
})
export class ServiceTaskService {

  constructor(private http : HttpClient) { }

  all(){
    return this.http.get<task[]>('http://localhost:3000/task')
  }

  getId(id:number){
    return this.http.get<task>('http://localhost:3000/task/'+id)
  }

  addTask(task: task){
    return this.http.post<task[]>('http://localhost:3000/task/', task)
  }

  update(id:number, task:task){
    return this.http.put<task>(`http://localhost:3000/task/${id}`, task)
  }
}
