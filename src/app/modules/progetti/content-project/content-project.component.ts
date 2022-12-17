import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { project } from 'src/app/shared/models/project';
import { ProjectService } from 'src/app/shared/servizi/project/project.service';

@Component({
  selector: 'app-content-project',
  templateUrl: './content-project.component.html',
  styleUrls: ['./content-project.component.scss']
})
export class ContentProjectComponent implements OnInit {


  constructor(private projectService : ProjectService,
              private router: Router) { }

  pending : project[]=[]
  progress: project[]=[]
  done: project[]=[]

  ngOnInit(): void {


    this.projectService.all().subscribe(res => {
      if(this.pending != undefined){
        this.pending = res.filter(x=>x.status == 'pending')
      }
    })
    this.projectService.all().subscribe(res => {
      if(this.progress != undefined){
        this.progress = res.filter(x=>x.status == 'in progress')
      }
    })
    this.projectService.all().subscribe(res => {
      if(this.done != undefined){
        this.done = res.filter(x=>x.status == 'done')
      }
    })

  }

  formPro(){
    this.router.navigate(['progetti/progettiform'])
  }



}
