import jwt from 'jsonwebtoken';
export const tokenSign = (user:any)=>{
    console.log(process.env.JWT_SECRET);
    return jwt.sign({
        user,
    },
    // @ts-ignore
    process.env.JWT_SECRET,
    {
        expiresIn: '1d',
    });
}

export const verifyToken= (token:string|undefined)=>{
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