import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../../application/services/Token";
import { handleHttpError, handleResponse } from "../utils/handleError";

export const checkAuthToken = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        if(req.headers.authorization)
        {
            const token = req.headers.authorization.split(" ").pop();
            const tokenData = verifyToken(token);
            console.log(tokenData)
            if(tokenData){
               return next();
            }
        }
            return handleResponse(res,"NOT_AUTHORIZED",409); 
    }catch(e){
        handleHttpError(res,e);
    }
}
