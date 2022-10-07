import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskFormComponent } from './home/task/task-form/task-form.component';
import { TaskComponent } from './home/task/task/task.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "task",
    component : TaskComponent
  },
  {
    path : "formtask",
    component : TaskFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
