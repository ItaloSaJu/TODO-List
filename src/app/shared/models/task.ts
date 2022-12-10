export class task {
  id? : number
  title: string = ''
  description:String=''
  data : string = ''
  category : String =''
  public status?: 'pending' | 'in progress' | 'done' = 'pending';
}
