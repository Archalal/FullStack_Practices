require('dotenv').config()


const express=require('express')
const cors=require('cors')
const router=require('./routes')
require('./database/dbConnection')

const practiceServer=express()


practiceServer.use(cors())
practiceServer.use(express.json())
practiceServer.use(router)


const PORT=3000 ||process.env.PORT

practiceServer.listen(PORT,()=>{
    console.log(`the Server is running suceesfull in the port ${PORT}`);
    
})