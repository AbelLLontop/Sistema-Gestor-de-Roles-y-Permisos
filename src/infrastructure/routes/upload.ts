import { Router } from "express";
const router = Router();

 
router.get("/public",(req,res)=>{
  res.send("PRIVATE ZONE");  
});

export {router};