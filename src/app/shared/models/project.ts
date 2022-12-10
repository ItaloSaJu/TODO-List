export class project {
  id? : number
  description:String =''
  title: string = ''
  data : string = ''
  category : String =''
  public status?: 'pending' | 'in progress' | 'done' = 'pending';
}
