import { UserId } from "../../../domain/auth/user/UserId";
import { HandleErrorResponse, HandleResponse, HandleSuccessResponse } from "../../Response/HandleResponse";
import { UseCase } from "../UseCase";

export class FindUserByIdUseCase extends UseCase{
    public async exect(id:UserId): Promise<HandleResponse> {
        const repository = this.daoFactory.createUserDao();
        const user = await repository.readById(id);
        if(!user){
            return HandleErrorResponse("USER_NOT_EXIST",404);
        }
        return HandleSuccessResponse(user);
    }
}