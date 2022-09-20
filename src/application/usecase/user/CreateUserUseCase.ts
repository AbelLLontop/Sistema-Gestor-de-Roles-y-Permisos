import { User } from "../../../domain/auth/user/User";
import { HandleResponse, HandleSuccessResponse } from "../../Response/HandleResponse";
import { UseCase } from "../UseCase";

export class CreateUserUseCase extends UseCase{
    public async exect(newUser:User): Promise<HandleResponse> {
        const repository = this.daoFactory.createUserDao();
        const userCreated = await repository.create(newUser);
        return HandleSuccessResponse(userCreated);
    }
} 