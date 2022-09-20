import { ICrud } from "../../common/interfaces/ICrud";
import { Role } from "../rol/Role";
import { UserId } from "../user/UserId";
export interface IRoleRepository extends ICrud<Role> {
    readRoleByUser: (userId: UserId) => Promise<Role[]>;
}
