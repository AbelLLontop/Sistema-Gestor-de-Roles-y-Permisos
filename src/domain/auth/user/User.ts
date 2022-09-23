import { Role } from "../rol/Role";
 
export class User {
  private id: number | undefined;
  email: string;
  password: string;
  constructor(email: string, password: string,id?:number) {
    this.email = email;
    this.password = password;
    this.id = id;
  }
  getId():number | null{
    if(this.id){
      return this.id;
    }
    return null;
  }  
}
