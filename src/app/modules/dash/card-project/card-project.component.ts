import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { project } from 'src/app/shared/models/project';
import { ProjectService } from 'src/app/shared/servizi/project/project.service';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  to: project[] = []
  progress: project[] = []
  done: project[] = []

  List = ['To do', 'In Progress' , 'Completato']
  listItem : any;

  ngOnInit(): void {

    this.listItem = this.List[0]

    this.projectService.all().subscribe(res => {
      if(this.to != undefined){
        this.to = res.filter(x=>x.status == 'pending')

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

  todo(List:any){
    this.listItem = List;
  }



}
