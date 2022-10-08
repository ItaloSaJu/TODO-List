import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { taskForm } from 'src/app/models/taskForm';
import { TaskService } from 'src/app/servizi/task.service';

@Component({
  selector: 'app-task-form-page',
  templateUrl: './task-form-page.component.html',
  styleUrls: ['./task-form-page.component.css']
})
export class TaskFormPageComponent implements OnInit {

  constructor(private TaskService : TaskService,  private route: ActivatedRoute, private router : Router) { }

  dataTask : taskForm = new taskForm()

  ngOnInit(): void {

    const taskId = this.route.snapshot.params['id']

    if(taskId){
      this.TaskService.findById(taskId).subscribe(res => {
        if(taskId != undefined){
          this.dataTask = res
        }
      })
    }

  }


  add(dataTask : taskForm){

    if(dataTask.id){
      this.TaskService.update(dataTask.id, dataTask).subscribe()
      this.router.navigate(['/task'])
    }else{
      this.TaskService.add(dataTask).subscribe(res => {

        this.router.navigate(['/task'])
      })
    }
  }


}
