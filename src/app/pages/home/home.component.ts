import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { taskForm } from 'src/app/models/taskForm';
import { TaskService } from 'src/app/servizi/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pending : taskForm[] = []
  done : taskForm[] = []
  inprogress : taskForm[] = []


  constructor(private TaskService : TaskService) { }

  ngOnInit(): void {
    this.TaskService.getAll().subscribe(res => {
      if(this.pending != undefined){
        this.pending = res.filter(x => x.status == 'pending' )
      }
    }
    )
    this.TaskService.getAll().subscribe(res => {
      if(this.done != undefined){
        this.done = res.filter(x => x.status == 'done' )
      }
    }
    )
    this.TaskService.getAll().subscribe(res => {
      if(this.inprogress != undefined){
        this.inprogress = res.filter(x => x.status == 'in progress' )
      }
    }
    )


  }



}
