import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from '../dash/dash/dash.component';
import { FormProjectComponent } from '../progetti/form-project/form-project.component';
import { ProgettiComponent } from '../progetti/progetti/progetti.component';
import { TaskComponent } from '../task/task/task.component';

const routes: Routes = [
  {
    path:"",
    component:DashComponent
  },
  {
    path:"progetti",
    component:ProgettiComponent
  },
  {
    path:"progettiform",
    component:FormProjectComponent
  },
  {
    path: "progettiform/:id",
    component: FormProjectComponent
  },
  {
    path:"task",
    component:TaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
