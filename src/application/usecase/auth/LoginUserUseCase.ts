import { HandleErrorResponse, HandleSuccessResponse } from './../../Response/HandleResponse';
import { HandleResponse } from "../../Response/HandleResponse";
import { UseCase } from "../UseCase";
import { SearchUserByEmailUseCase } from "../user/SearchUserByEmailUseCase";
import { compare } from '../../services/Encrypt';
import { User } from '../../../domain/auth/user/User';
import { tokenSign } from '../../services/Token';

export class LoginUserUseCase extends UseCase{
    public async exect(email:string,password:string): Promise<HandleResponse> {
        const seatchUserByEmailUseCase = new SearchUserByEmailUseCase(this.daoFactory);
        const checkIsExist = await seatchUserByEmailUseCase.exect(email);
        const user:User = checkIsExist.data;
        if(!user){
            return HandleErrorResponse("USER_NOT_EXIST",404);
        }
        const checkPassword = await compare(password,user.password);
        if(!checkPassword){
            return HandleErrorResponse("PASSWORD_NOT_MATCH",402);
        }
        const tokenJwt = tokenSign(user);

        return HandleSuccessResponse({token:tokenJwt});
    }
  
}
