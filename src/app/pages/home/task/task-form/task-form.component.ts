import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { taskForm } from 'src/app/models/taskForm';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input() taskForm : taskForm = new taskForm()
  @Output() task = new EventEmitter<taskForm>()

  constructor() { }

  ngOnInit(): void {
  }

  addData(){
    this.task.emit(this.taskForm)
    console.log(this.taskForm)
  }


}
