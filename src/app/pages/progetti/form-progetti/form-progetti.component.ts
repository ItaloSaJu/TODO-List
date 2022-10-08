import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { project } from 'src/app/models/project';

@Component({
  selector: 'app-form-progetti',
  templateUrl: './form-progetti.component.html',
  styleUrls: ['./form-progetti.component.css']
})
export class FormProgettiComponent implements OnInit {

  formProject : project = new project
  @Output() emitProject = new EventEmitter<project>()
  constructor() { }

  ngOnInit(): void {

  }

  addData(){
    this.emitProject.emit(this.formProject)
  }

}
