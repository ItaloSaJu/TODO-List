import { Pipe, PipeTransform } from '@angular/core';
import { taskForm } from '../models/taskForm';

@Pipe({
  name: 'ngIf'
})
export class NgIfPipe implements PipeTransform {

  transform(dati$: taskForm, ...args: unknown[]): any {
    console.log(dati$)
    if(dati$){
     // item.filter(d => d.status.pending = d)
    }
    return null
  }

}
