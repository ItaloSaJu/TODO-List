import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TaskFormComponent } from './home/task/task-form/task-form.component';
import { TaskComponent } from './home/task/task/task.component';
import { FormsModule } from '@angular/forms';
import { TaskFormPageComponent } from './home/task/task-form-page/task-form-page.component';
import { ProgettiComponent } from './progetti/progetti.component';
import { FormProgettiComponent } from './progetti/form-progetti/form-progetti.component';
import { FormPageProgettiComponent } from './progetti/form-page-progetti/form-page-progetti.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { NgIfPipe } from '../pipe/ng-if.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    TaskFormComponent,
    TaskComponent,
    TaskFormPageComponent,
    ProgettiComponent,
    FormProgettiComponent,
    FormPageProgettiComponent,
    RegistratiComponent,
    NgIfPipe



  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule

  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    TaskComponent
  ]
})
export class PagesModule { }
