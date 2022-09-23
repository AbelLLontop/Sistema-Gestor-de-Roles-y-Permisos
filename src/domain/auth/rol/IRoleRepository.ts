import { ICrud } from "../../common/interfaces/ICrud";
import { Role } from "../rol/Role";
export interface IRoleRepository extends ICrud<Role> {
    listRolesByUser(id:number):Promise<Role[]>;
}
 