import { IRoleRepository } from "../../domain/auth/rol/IRoleRepository";
import { IUserRepository } from "../../domain/auth/user/IUserRepository";

export interface IDAOFactory{
    createUserDao(): IUserRepository;
    createRoleDao(): IRoleRepository;
}