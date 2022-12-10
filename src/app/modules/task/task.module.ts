import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task/task.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { NavModule } from '../nav/nav.module';
import { ContentTaskComponent } from './content-task/content-task.component';


@NgModule({
  declarations: [
    TaskComponent,
    ContentTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SidebarModule,
    NavModule
  ]
})
export class TaskModule { }
