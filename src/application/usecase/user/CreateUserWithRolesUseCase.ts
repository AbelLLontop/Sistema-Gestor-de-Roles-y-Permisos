import { HandleSuccessResponse } from './../../Response/HandleResponse';
import { RoleId } from "../../../domain/auth/rol/RoleId";
import { User } from "../../../domain/auth/user/User";
import { HandleResponse } from "../../Response/HandleResponse";
import { UseCase } from "../UseCase";

export class CreateUserWithRolesUseCase extends UseCase{
    public async exect(user:User,rolesId:Array<RoleId>): Promise<HandleResponse> {
        const repository = this.daoFactory.createUserDao();
        const userCreated = await repository.createWithRolesId(user,rolesId);
        return HandleSuccessResponse(userCreated);
    }
}