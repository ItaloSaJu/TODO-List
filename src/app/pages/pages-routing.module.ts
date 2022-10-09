import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardRegistratiGuard } from '../guard/guard-registrati.guard';
import { HomeComponent } from './home/home.component';
import { TaskFormPageComponent } from './home/task/task-form-page/task-form-page.component';
import { TaskComponent } from './home/task/task/task.component';
import { FormPageProgettiComponent } from './progetti/form-page-progetti/form-page-progetti.component';
import { FormProgettiComponent } from './progetti/form-progetti/form-progetti.component';
import { ProgettiComponent } from './progetti/progetti.component';
import { RegistratiComponent } from './registrati/registrati.component';

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
  },
  {
    path : "progettiForm",
    component : FormPageProgettiComponent
  },

  {
    path : "progettiForm/:id",
    component : FormPageProgettiComponent
  },
  {
    path : "registrati",
    component : RegistratiComponent,
    canActivate: [GuardRegistratiGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
