import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DashComponent } from './modules/dash/dash/dash.component';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./modules/dash/dash.module').then(m => m.DashModule)
  },
  {
    path:"progetti",
    loadChildren: () => import('./modules/progetti/progetti.module').then(m => m.ProgettiModule)
  },
  {
    path:"task",
    loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
