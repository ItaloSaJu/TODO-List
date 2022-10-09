import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { project } from 'src/app/models/project';
import { ProgettiService } from 'src/app/servizi/progetti/progetti.service';

@Component({
  selector: 'app-form-page-progetti',
  templateUrl: './form-page-progetti.component.html',
  styleUrls: ['./form-page-progetti.component.css']
})
export class FormPageProgettiComponent implements OnInit {

  constructor(private ProgettiService : ProgettiService , private route : ActivatedRoute,  private router : Router) { }
  dataproject : project = new project()


  ngOnInit(): void {
    const projectId = this.route.snapshot.params['id']
    console.log(projectId);


    if(projectId){
      this.ProgettiService.getId(projectId).subscribe(res => {
        if(projectId != undefined){
          this.dataproject = res
        }
      })
    }

  }
  add(dataproject: project ){
    debugger
    if(dataproject.id){
      this.ProgettiService.update(dataproject.id  , dataproject).subscribe()
      this.router.navigate(['/progetti'])
    } else{
      this.ProgettiService.post(dataproject).subscribe(res => {
        this.router.navigate(['/progetti'])

      })
    }
  }





}
