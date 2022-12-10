import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/shared/models/task';
import { ServiceTaskService } from 'src/app/shared/servizi/task/service-task.service';

@Component({
  selector: 'app-content-task',
  templateUrl: './content-task.component.html',
  styleUrls: ['./content-task.component.scss']
})
export class ContentTaskComponent implements OnInit {

  constructor(private serviceTaskService : ServiceTaskService) { }
  pending : task[]=[]
  progress: task[]=[]
  done: task[]=[]

  ngOnInit(): void {

    this.serviceTaskService.all().subscribe(res => {
      if(this.pending != undefined){
        this.pending = res.filter(x=>x.status == 'pending')
      }
    })
    this.serviceTaskService.all().subscribe(res => {
      if(this.progress != undefined){
        this.progress = res.filter(x=>x.status == 'in progress')
      }
    })
    this.serviceTaskService.all().subscribe(res => {
      if(this.done != undefined){
        this.done = res.filter(x=>x.status == 'done')
      }
    })
  }

}
