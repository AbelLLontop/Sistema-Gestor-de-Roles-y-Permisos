import { IDAOFactory } from "../../domain/services/IDaoFactory";
import { IRoleRepository } from "../../domain/auth/rol/IRoleRepository";
import { IUserRepository } from "../../domain/auth/user/IUserRepository";
import { UserRepository } from "./prisma/UserRepository";

export class PrismaDaoFactory implements IDAOFactory{
    createUserDao(): IUserRepository {
        return new UserRepository();
    }    
    createRoleDao(): IRoleRepository {
        throw new Error("Method not implemented.");
    }  
}
