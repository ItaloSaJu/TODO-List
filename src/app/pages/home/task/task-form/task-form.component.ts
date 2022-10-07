import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { taskForm } from 'src/app/models/taskForm';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  taskForm : taskForm = new taskForm()
  @Output() task = new EventEmitter<taskForm>()

  constructor() { }



  ngOnInit(): void {
  }

  addData(){
    this.task.emit(this.taskForm)
  }
  https://app.box.com/s/jaryhgb75kyn4ci9u40dbcg1b7whidag/file/1033181878180

}
