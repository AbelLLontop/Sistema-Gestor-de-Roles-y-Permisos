import { UseCase } from "../UseCase";
import { Role } from '../../../domain/auth/rol/Role';
import { HandleResponse, HandleSuccessResponse } from '../../Response/HandleResponse';

export class CreateRoleUseCase extends UseCase{
    public async exect(newRole:Role): Promise<HandleResponse> {
        const repository = this.daoFactory.createRoleDao();
        const role =await repository.create(newRole);
        return HandleSuccessResponse(role); 
    }
} 