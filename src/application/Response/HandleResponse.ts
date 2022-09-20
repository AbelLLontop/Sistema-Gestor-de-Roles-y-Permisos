export interface HandleResponse{
    status: number;
    data:any
}

export const HandleSuccessResponse = (data:any):HandleResponse=>{
    return {
        status:200,
        data
    }
}

export const HandleErrorResponse = (data:any,status:number):HandleResponse=>{
    return {
        status,
        data
    }
};

