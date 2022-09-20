import { UserId } from "../../../domain/auth/user/UserId";
import { HandleResponse, HandleSuccessResponse } from "../../Response/HandleResponse";
import { UseCase } from "../UseCase";

export class ListUsersUseCase extends UseCase{
    public async exect(id:UserId): Promise<HandleResponse> {
        const repository = this.daoFactory.createUserDao();
        const user = await repository.read();
        return HandleSuccessResponse(user);
    }
}