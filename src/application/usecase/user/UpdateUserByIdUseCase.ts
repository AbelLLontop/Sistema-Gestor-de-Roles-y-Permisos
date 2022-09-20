import { User } from "../../../domain/auth/user/User";
import { UserId } from "../../../domain/auth/user/UserId";
import { HandleResponse, HandleSuccessResponse } from "../../Response/HandleResponse";
import { UseCase } from "../UseCase";

export class UpdateUserByIdUseCase extends UseCase{
    public async exect(id:UserId,user:User): Promise<HandleResponse> {
        const repository = this.daoFactory.createUserDao();
        const userUpdate = await repository.update(id,user)
        return HandleSuccessResponse(userUpdate);
    }

} 