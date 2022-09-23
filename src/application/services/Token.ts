import { User } from './../../domain/auth/user/User';
import jwt from 'jsonwebtoken';



export const tokenSign = (data:User)=>{
    console.log(process.env.JWT_SECRET);
    return jwt.sign({
        id:data.getId(),
    },
    // @ts-ignore
    process.env.JWT_SECRET,
    {
        expiresIn: '1d',
    });
}

export const verifyToken= (token:string|undefined):any|null=>{
    try{
        // @ts-ignore
        return jwt.verify(token,process.env.JWT_SECRET);
    }catch(e){
        return null
    }
}

export const decodeSign = (token:string)=>{
    return jwt.decode(token,{complete:true});
}