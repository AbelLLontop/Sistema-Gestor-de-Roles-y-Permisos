import { Response } from "express";

export const handleHttpError = (res:Response,error:any)=>{
  console.log("Ocurrio un Error, posiblmente en la bd")
  res.status(500);
  res.send({error});
}

export const handleResponse = (res:Response,message:any,code=401)=>{
  res.status(code);
  res.send(message);
}
  