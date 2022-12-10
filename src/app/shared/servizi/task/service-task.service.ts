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
}
