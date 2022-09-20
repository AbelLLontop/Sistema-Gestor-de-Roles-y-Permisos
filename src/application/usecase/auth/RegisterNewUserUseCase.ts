import { HandleErrorResponse } from './../../Response/HandleResponse';
import { User } from "../../../domain/auth/user/User";
import { HandleResponse } from "../../Response/HandleResponse";
import { UseCase } from "../UseCase";
import { CreateUserUseCase } from "../user/CreateUserUseCase";
import { SearchUserByEmailUseCase } from "../user/SearchUserByEmailUseCase";
import { encrypt } from '../../services/Encrypt';

export class RegisterNewUserUseCase extends UseCase{
    public async exect(email:string,password:string): Promise<HandleResponse> {
        const searchUserByEmailUseCase =new SearchUserByEmailUseCase(this.daoFactory);
        const checkIsExist = await searchUserByEmailUseCase.exect(email);
  
        if(checkIsExist.data){
          return HandleErrorResponse("USER_EXIST",401);
           
        }
        const passwordEncrypt = await encrypt(password);
        const registerUserUseCase = new CreateUserUseCase(this.daoFactory);
        const newUser = new User({email,password:passwordEncrypt});
        const responseUserCreate = await registerUserUseCase.exect(newUser);
        return responseUserCreate;
    }
}