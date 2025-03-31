const users=require('../database/models/userModels')
const jwt=require('jsonwebtoken')


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
  // console.log(req.body);
    const{email,password}=req.body
    // console.log(email);
    // console.log(password);
    
    
    
    

   try{
    const existingUser= await users.findOne({email,password})

    if(existingUser){
      const token=jwt.sign({userId:existingUser._id},process.env.JWTSECRETKEY)

      
        res.status(200).json({user:existingUser,token})
    }
    else{
        res.status(401).json("invalid credentails")
    }
    
   }
   catch(err){
    console.log(err);
    res.status(500).json({"message":err})
    
   }

}