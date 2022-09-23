import { UseCase } from "../UseCase";
import { HandleResponse, HandleSuccessResponse } from '../../Response/HandleResponse';
import { UserId } from "../../../domain/auth/user/UserId";

export class ListRoleByUserUseCase extends UseCase{
    public async exect(id:UserId): Promise<HandleResponse> {
        const repository = this.daoFactory.createRoleDao();
        const roles =await repository.listRolesByUser(id);
        return HandleSuccessResponse(roles); 
    }
} 