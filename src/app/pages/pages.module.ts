import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TaskFormComponent } from './home/task/task-form/task-form.component';
import { TaskComponent } from './home/task/task/task.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    TaskFormComponent,
    TaskComponent

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
