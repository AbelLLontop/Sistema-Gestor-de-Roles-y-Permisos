import { IRoleRepository } from "../auth/rol/IRoleRepository";
import { IUserRepository } from "../auth/user/IUserRepository";

export interface IDAOFactory{
    createUserDao(): IUserRepository;
    createRoleDao(): IRoleRepository;
}