import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgettiRoutingModule } from './progetti-routing.module';
import { ProgettiComponent } from './progetti/progetti.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { NavModule } from '../nav/nav.module';
import { ContentProjectComponent } from './content-project/content-project.component';
import { FormProjectModule } from 'src/app/shared/form/form-project/form-project.module';
import { FormProjectComponent } from './form-project/form-project.component';


@NgModule({
  declarations: [
    ProgettiComponent,
    ContentProjectComponent,
    FormProjectComponent

  ],
  imports: [
    CommonModule,
    ProgettiRoutingModule,
    SidebarModule,
    NavModule,
    FormProjectModule

  ]
})
export class ProgettiModule { }
