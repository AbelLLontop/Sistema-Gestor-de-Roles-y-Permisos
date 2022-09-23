import { IDAOFactory } from "../../application/services/IDaoFactory";
import { IRoleRepository } from "../../domain/auth/rol/IRoleRepository";
import { IUserRepository } from "../../domain/auth/user/IUserRepository";
import { RoleRepository } from "./prisma/RoleRepository";
import { UserRepository } from "./prisma/UserRepository";

export class PrismaDaoFactory implements IDAOFactory{
    createRoleDao(): IRoleRepository {
        return new RoleRepository();
    }
    createUserDao(): IUserRepository {
        return new UserRepository();
    }    
  
}
