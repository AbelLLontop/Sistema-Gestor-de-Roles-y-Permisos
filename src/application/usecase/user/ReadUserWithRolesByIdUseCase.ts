import { IUserRepository } from "../../../domain/auth/user/IUserRepository";
import { UserId } from "../../../domain/auth/user/UserId";
import { HandleResponse, HandleSuccessResponse } from "../../Response/HandleResponse";
import { UseCase } from "../UseCase";

export class ReadUserWithRolesByIdUseCase extends UseCase{
    public async exect(id:UserId): Promise<HandleResponse> {
        const repository = this.daoFactory.createUserDao();
        const user= await repository.readWithRoles(id);
        return HandleSuccessResponse(user);
    }
} 