import { HandleResponse, HandleSuccessResponse } from "../../Response/HandleResponse";
import { UseCase } from "../UseCase";

export class SearchUserByEmailUseCase extends UseCase{
    public async exect(email:string): Promise<HandleResponse> {
        const repository = this.daoFactory.createUserDao();
        const user = await repository.searchBYEmail(email);
        return HandleSuccessResponse(user);
    }
 
} 