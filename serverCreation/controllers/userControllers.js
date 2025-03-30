const users=require('../database/models/userModels')


exports.registerControllers=async(req,res)=>{

    const{username,email,password}=req.body

  try{
    const existingUser= await users.findOne({username})

    if(existingUser){
        res.status(409).json("user already registered")
    }
    else{
        const newUser=new users({username,email,password})
        await newUser.save()
        res.status(201).json(" Registered successfully")
    }
  }
  catch(err){
    console.log(err);
    
  }

}


exports.loginController=async(req,res)=>{

    const{email,password}=req.body

   try{
    const existingUser= await users.findOne({email,password})

    if(existingUser){
        res.status(200).json("login sucessfull")
    }
    else{
        res.status(401).json("invalid credentails")
    }
    
   }
   catch(err){
    console.log(err);
    
   }

}