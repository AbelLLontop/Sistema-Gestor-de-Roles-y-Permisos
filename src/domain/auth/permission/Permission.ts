export class Permission{
    id: number | undefined;
    name: string;
    
    constructor(payload:{id?:number;name:string}) {
        this.id = payload.id;
        this.name = payload.name;
    }
}