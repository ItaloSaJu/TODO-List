import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgettiRoutingModule } from './progetti-routing.module';
import { ProgettiComponent } from './progetti/progetti.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { NavModule } from '../nav/nav.module';
import { ContentProjectComponent } from './content-project/content-project.component';


@NgModule({
  declarations: [
    ProgettiComponent,
    ContentProjectComponent

  ],
  imports: [
    CommonModule,
    ProgettiRoutingModule,
    SidebarModule,
    NavModule
  ]
})
export class ProgettiModule { }
