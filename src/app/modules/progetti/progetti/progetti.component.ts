import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { project } from 'src/app/shared/models/project';
import { ProjectService } from 'src/app/shared/servizi/project/project.service';

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.component.html',
  styleUrls: ['./progetti.component.scss']
})
export class ProgettiComponent implements OnInit {


  constructor(private projectService : ProjectService,
              private route : ActivatedRoute,
              private router : Router) { }

  dataProject : project = new project()

  ngOnInit(): void {
    const projectId = this.route.snapshot.params['id']
    console.log(projectId);


    if(projectId){
      this.projectService.getId(projectId).subscribe(res => {
        if(projectId != undefined){
          this.dataProject = res
        }
      })
    }
  }



  newData(dataproject: project ){

    if(dataproject.id){
      this.projectService.update(dataproject.id  , dataproject).subscribe()
      this.router.navigate(['/progetti'])
    } else{
      this.projectService.addProject(dataproject).subscribe(res => {
        this.router.navigate(['/progetti'])

      })
    }
  }

}
