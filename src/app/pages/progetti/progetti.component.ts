import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { project } from 'src/app/models/project';
import { ProgettiService } from 'src/app/servizi/progetti/progetti.service';

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.component.html',
  styleUrls: ['./progetti.component.css']
})
export class ProgettiComponent implements OnInit {

  constructor(private ProgettiService : ProgettiService) { }

  pro : BehaviorSubject<project[]> = new BehaviorSubject<project[]>([])
  project$ = this.pro.asObservable()

  ngOnInit(): void {

    this.ProgettiService.all().subscribe(res => {
      if(this.pro != undefined){
        return this.pro.next(res)
      }
    })
  }

  delete(id: any){
    this.ProgettiService.delete(id).subscribe()
    this.ngOnInit()
  }

}
