import { ICrud } from "../../common/interfaces/ICrud";
import { RoleId } from "../rol/RoleId";
import { User } from "./User";
import { UserId } from "./UserId";
export interface IUserRepository extends ICrud<User> {
  searchBYEmail(email: string): Promise<User | null>;
  updateRolesByUser(id:UserId,roles:Array<RoleId>):Promise<User | null>
}
 