import commonAPI from'./commonAPI'  
export const registerUser=async(requestedBody)=>{


    return await  commonAPI('post','/register',requestedBody)


}


export const userLogin=async(requestedBody)=>{
    return await commonAPI('post','/login',requestedBody)
}