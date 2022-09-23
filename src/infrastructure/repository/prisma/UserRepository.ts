import { Role } from "../../../domain/auth/rol/Role";
import { RoleId } from "../../../domain/auth/rol/RoleId";
import { IUserRepository } from "../../../domain/auth/user/IUserRepository";
import { User } from "../../../domain/auth/user/User";
import { UserId } from "../../../domain/auth/user/UserId";
import { prisma } from "./prisma";


export class UserRepository implements IUserRepository {

  async searchBYEmail(email: string): Promise<User | null> {
    const userRead = await prisma.user.findFirst({
      where: { email },
    });
    if (userRead) {
      const user = new User(userRead.email,userRead.password,userRead.id);
      return user;
    }
    return null;
  }
  async updateRolesByUser(id: number, roles: number[]): Promise<User | null> {
    const rolesId = roles.map((id: RoleId) => ({ id }));
    const userUpdate = await prisma.user.update({
      where: {id},
      data: {
        roles: {
          set: rolesId,
        },
      },
    });
    const user = new User(userUpdate.email,userUpdate.password);
    return user;
  }
  async create(item: User): Promise<User | null> {
      const userCreated = await 
      prisma.user.create({
         data: {
           email: item.email,
           password: item.password,
         },
       });
     const user = new User(userCreated.email,userCreated.password);
     return user;
  }

  async readById(id: UserId): Promise<User | null> {
    const userRead = await prisma.user.findFirst({
      where: { id },
    });
    if (userRead) {
      const user = new User(userRead.email,userRead.password);
      return user;
    }
    return null;
  }

  async read(): Promise<User[] | null> {
    const users = await prisma.user.findMany();
    return users.map((user) => new User(user.email,user.password));
  }

  async update(id: UserId, item: User): Promise<User | null> {
    const userUpdate = await prisma.user.update({
      where: { id },
      data: {
        email: item.email,
        password: item.password,
      },
    });
    const user = new User(userUpdate.email,userUpdate.password);
    return user;
  }

  async delete(id: UserId): Promise<User | null> {
    const userDelete = await prisma.user.delete({
      where: { id },
    });
    const user = new User(userDelete.email,userDelete.password);
    return user;
  }

}
