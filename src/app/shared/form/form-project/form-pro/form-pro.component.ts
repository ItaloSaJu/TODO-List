import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-form-pro',
  templateUrl: './form-pro.component.html',
  styleUrls: ['./form-pro.component.scss']
})
export class FormProComponent implements OnInit {

@Output() newData = new EventEmitter<project>()
 @Input() formPro :project = new project();



  constructor() { }

  ngOnInit(): void {
  }

 form = new FormGroup(
    {
      title: new FormControl('' , Validators.required),
      description: new FormControl('', [Validators.required]) ,
      data: new FormControl('' , [Validators.required]),
      category: new FormControl(''),
    }

    )

    addData() {
      this.newData.emit(this.formPro);
    }

    registerSubmit(){
      console.log(this.form.get("title"));
      console.log(this.form.value);

  }

}
