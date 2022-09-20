import { ICrud } from "../../common/interfaces/ICrud";
import { Role } from "../rol/Role";
import { RoleId } from "../rol/RoleId";
import { User } from "./User";
import { UserId } from "./UserId";
export interface IUserRepository extends ICrud<User> {
  createWithRolesId(item: User, roles: Array<RoleId>): Promise<User | null>;
  readWithRoles(id: UserId): Promise<{ user: User; roles: Array<Role> }>;
  searchBYEmail(email: string): Promise<User | null>;
  updateRolesByUser(id:UserId,roles:Array<RoleId>):Promise<User | null>
}
 