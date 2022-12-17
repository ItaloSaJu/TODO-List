import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProComponent } from './form-pro/form-pro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormProComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule


  ],
  exports: [
    FormProComponent,

  ]
})
export class FormProjectModule { }
