import { Role } from "../../../domain/auth/rol/Role";
import { RoleId } from "../../../domain/auth/rol/RoleId";
import { IUserRepository } from "../../../domain/auth/user/IUserRepository";
import { User } from "../../../domain/auth/user/User";
import { UserId } from "../../../domain/auth/user/UserId";
import { prisma } from "./prisma";


export class UserRepository implements IUserRepository {
  
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
    const user = new User({ ...userUpdate });
    return user;
  }
  async searchBYEmail(email: string): Promise<User | null> {
    const userRead = await prisma.user.findFirst({
      where: { email },
    });
    if (userRead) {
      const user = new User({ ...userRead });
      return user;
    }
    return null;
  }
  async create(item: User): Promise<User | null> {
    const userCreated = await 
     prisma.user.create({
        data: {
          email: item.email,
          password: item.password,
        },
      });
    const user = new User({ ...userCreated });
    return user;
 
  }

  async readById(id: UserId): Promise<User | null> {
    const userRead = await prisma.user.findFirst({
      where: { id },
    });
    if (userRead) {
      const user = new User({ ...userRead });
      return user;
    }
    return null;
  }

  async read(): Promise<User[] | null> {
    const users = await prisma.user.findMany();
    return users.map((user) => new User({ ...user }));
  }

  async update(id: UserId, item: User): Promise<User | null> {
    const userUpdate = await prisma.user.update({
      where: { id },
      data: {
        email: item.email,
        password: item.password,
      },
    });
    const user = new User({ ...userUpdate });
    return user;
  }

  async delete(id: UserId): Promise<User | null> {
    const userDelete = await prisma.user.delete({
      where: { id },
    });
    const user = new User({ ...userDelete });
    return user;
  }

  async createWithRolesId(item: User, roles: RoleId[]): Promise<User | null> {
    const usar = roles.map((id: RoleId) => ({ id }));
    const userWithRoles = await prisma.user.create({
      data: {
        email: item.email,
        password: item.password,
        roles: {
          connect: usar,
        },
      },
    });
    const user = new User({ ...userWithRoles });
    return user;
  }
  async readWithRoles(id: UserId): Promise<{ user: User; roles: Role[] }> {
    const userWithRoles = await prisma.user.findFirst({
      where: {
        id,
      },
      include: {
        roles: true,
      },
    });
    const roles: Role[] = userWithRoles?.roles || [];
    const user: User = new User({
      email: userWithRoles?.email || "",
      password: userWithRoles?.password || "",
    });
    return {
      user,
      roles,
    };
  }
}
