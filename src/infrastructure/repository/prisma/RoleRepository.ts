import { IRoleRepository } from "../../../domain/auth/rol/IRoleRepository";
import { Role } from "../../../domain/auth/rol/Role";
import { prisma } from "./prisma";

export class RoleRepository implements IRoleRepository {
  async listRolesByUser(id: number): Promise<Role[]> {
    const roles = await prisma.rol.findMany({
      where: {
        users: {
          some: {
            id,
          },
        },
      },
    });
    return roles.map((role) => new Role(role.name));
   }
  async create(item: Role): Promise<Role | null> {
    const roleCreate = await prisma.rol.create({
      data: {
        name: item.name,
      },
    });
    const role = new Role(roleCreate.name);
    return role;
  }
  async readById(id: number): Promise<Role | null> {
    const roleRead = await prisma.rol.findFirst({
      where: { id },
    });
    if (roleRead) {
      const role = new Role(roleRead.name);
      return role;
    }
    return null;
  }
  async read(): Promise<Role[] | null> {
    const role = await prisma.rol.findMany();
    return role.map((role) => new Role(role.name)); 
  }
  async update(id: number, item: Role): Promise<Role | null> {
     const roleUpdate = await prisma.rol.update({
        where: { id },
        data: {
            name: item.name,
        },
    });

    const role = new Role(roleUpdate.name);
    return role;
    
  }
  async delete(id: number): Promise<Role | null> {
    const roleDelete = await prisma.rol.delete({
        where: { id },
    });
    const role = new Role(roleDelete.name);
    return role;
  }
}
