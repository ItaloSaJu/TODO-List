import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentProjectComponent } from './content-project/content-project.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgettiRoutingModule { }
