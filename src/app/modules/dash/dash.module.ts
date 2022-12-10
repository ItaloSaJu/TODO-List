import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash/dash.component';
import { NavModule } from "../nav/nav.module";
import { SidebarModule } from '../sidebar/sidebar.module';
import { CardTaskComponent } from './card-task/card-task.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { FormProjectModule } from 'src/app/shared/form/form-project/form-project.module';


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
        FormProjectModule
    ]
})
export class DashModule { }
