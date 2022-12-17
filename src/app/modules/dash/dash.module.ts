import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash/dash.component';
import { NavModule } from "../nav/nav.module";
import { SidebarModule } from '../sidebar/sidebar.module';
import { CardTaskComponent } from './card-task/card-task.component';
import { CardProjectComponent } from './card-project/card-project.component';


@NgModule({
    declarations: [
        DashComponent,
        CardTaskComponent,
        CardProjectComponent,

    ],
    imports: [
        CommonModule,
        DashRoutingModule,
        NavModule,
        SidebarModule,
    ]
})
export class DashModule { }
