import { Router } from "express";
import { AuthController } from "../controller/AuthController";
import { checkAuthToken } from "../middleware/checkToken";
import { validateCredentials } from "../validators/user";

const router = Router();
const controller = new AuthController(); 


router.post("/register",validateCredentials,controller.register)
router.post("/login",validateCredentials,controller.login)
router.get("/private",checkAuthToken,(req,res)=>{
  res.send("PRIVATE ZONE");  
});
router.get("/public",(req,res)=>{
  res.send("PRIVATE ZONE");  
});

export {router};