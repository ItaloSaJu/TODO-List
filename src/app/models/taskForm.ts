export class taskForm {
  public id?: number;
  public title?: string = '';
  public description?: string = '';
  public status?: 'pending' | 'in progress' | 'done' = 'pending';
  //public status : string = ''
}
