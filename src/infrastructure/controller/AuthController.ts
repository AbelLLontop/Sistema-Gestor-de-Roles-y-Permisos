import {handleHttpError, handleResponse } from './../utils/handleError';
import { Request, Response } from "express";
import { DAOFactoryConcrete } from '../repository/DAOFactoryConcrete';
import { RegisterNewUserUseCase } from '../../application/usecase/auth/RegisterNewUserUseCase';
import { LoginUserUseCase } from '../../application/usecase/auth/LoginUserUseCase';

export class AuthController { 
  public async register(req: Request, res: Response) {
    try{
      const {email,password} = req.body;
      const registerNewUserUseCase = new RegisterNewUserUseCase(DAOFactoryConcrete);
      const {status,data} = await registerNewUserUseCase.exect(email,password);
      handleResponse(res,data,status);
    }catch(e){
      console.log(e);
      handleHttpError(res,e);
    }
  }

  public async login(req: Request, res: Response) {
    try{
      const {email,password} = req.body;
      const loginUserUseCase = new LoginUserUseCase(DAOFactoryConcrete);
      const {status,data} = await loginUserUseCase.exect(email,password);
      handleResponse(res,data,status);
    }catch(e){
      handleHttpError(res,e);
    }
  }

}



















// const {body,params,query} = req;