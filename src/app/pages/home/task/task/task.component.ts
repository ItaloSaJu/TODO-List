import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { taskForm } from 'src/app/models/taskForm';
import { TaskService } from 'src/app/servizi/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  dati : BehaviorSubject<taskForm[]> = new BehaviorSubject<taskForm[]>([])
  dati$ = this.dati.asObservable()


  constructor( public TaskService : TaskService) { }

  ngOnInit( ): void {
    this.TaskService.getAll().subscribe(res => {
      if(this.dati !=undefined){
       return this.dati.next(res)
      }
    })
  }

  delete(id : any){
    this.TaskService.delete(id).subscribe()
    this.ngOnInit()
  }

}
