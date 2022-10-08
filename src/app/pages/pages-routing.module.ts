import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskFormPageComponent } from './home/task/task-form-page/task-form-page.component';
import { TaskComponent } from './home/task/task/task.component';
import { ProgettiComponent } from './progetti/progetti.component';

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
    path : "taskForm",
    component : TaskFormPageComponent
  },
  {
    path : "taskForm/:id",
    component : TaskFormPageComponent
  },
  {
    path : "progetti",
    component : ProgettiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
