import { NextFunction, Request, Response } from 'express';
import {body} from 'express-validator';
import { validateResult } from '../utils/validateHelper';


export const validateCredentials = [
    body('email').exists().isEmail().not().isEmpty(),
    body('password').exists().not().isEmpty(),
    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next);      
    }
]