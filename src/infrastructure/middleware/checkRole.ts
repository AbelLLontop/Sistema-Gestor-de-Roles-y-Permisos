import { DAOFactoryConcrete } from "./../repository/DAOFactoryConcrete";
import { ListRoleByUserUseCase } from "./../../application/usecase/role/ListRoleByUserUseCase";
import { Role } from "./../../domain/auth/rol/Role";
import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../../application/services/Token";
import { handleHttpError, handleResponse } from "../utils/handleError";

export const checkRole =
  (roles: Array<string>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.headers.authorization) {
        return handleResponse(res, "NOT_ALLOW", 409);
      }
      const token = req.headers.authorization.split(" ").pop();
      const tokenData = verifyToken(token);
      if (tokenData) {
        const id: number = tokenData.id;
        const listRoleByUserUseCase = new ListRoleByUserUseCase(
          DAOFactoryConcrete
        );
        const listRole = await listRoleByUserUseCase.exect(id);
        const isAuthorized = listRole.data.some((role: Role) =>
          roles.includes(role.name)
        );
        if (isAuthorized) {
          return next();
        }
      }
      return handleResponse(res, "NOT_ROL", 409);
    } catch (e) {
      handleHttpError(res, e);
    }
  };
