import { Pipe, PipeTransform } from '@angular/core';
import { taskForm } from '../models/taskForm';

@Pipe({
  name: 'ngIf'
})
export class NgIfPipe implements PipeTransform {

  transform(dati: taskForm[], ...args: unknown[]): any {
    console.log(dati)


    return dati = dati.filter(x => x.status == "pending")
  }

}
