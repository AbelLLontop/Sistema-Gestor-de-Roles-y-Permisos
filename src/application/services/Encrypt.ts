import bcrypt from 'bcryptjs';


export const encrypt = async (textPlain:string)=>{
    const hash = await bcrypt.hash(textPlain,8);
    return hash;
}

export const compare = async (passwordPlain:string,passwordHash:string)=>{
    const isMatch = await bcrypt.compare(passwordPlain,passwordHash);
    return isMatch;
} 