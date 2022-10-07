import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { taskForm } from '../models/taskForm';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get<taskForm[]>(`http://localhost:3000/task/`)
  }

  delete(id:number){
    return this.http.delete<taskForm[]>(`http://localhost:3000/task/${id}`)
  }

  add(task : taskForm){
    return this.http.post<taskForm[]>(`http://localhost:3000/task/`, task)
  }

  update(id:number, task:taskForm){
    return this.http.post<taskForm[]>(`http://localhost:3000/task/${id}`, task)

  }
}
