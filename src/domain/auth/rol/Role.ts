export class Role {
  private id: number | undefined;
  name: string;
  constructor(name:string,id?:number) {
    this.name = name;
    this.id = id;
  }
  getId():number | null{
    if(this.id){
      return this.id;
    }
    return null;
  } 
}
