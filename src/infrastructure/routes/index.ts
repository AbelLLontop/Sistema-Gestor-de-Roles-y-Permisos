import { Router } from "express";
import {router as authRouter} from "./auth";
import {router as uploadRouter} from "./upload";

const router = Router();
router.use("/auth",authRouter)
router.use("/upload",uploadRouter)
router.use("/*",(req,res)=>{
    res.status(404).send("NOT FOUND");
})

export {router};