const mongoose=require('mongoose')
let connectionString=process.env.CONNECTIONSTRING

mongoose.connect(connectionString)
.then(()=>{
    console.log("Sucessfully connected moongose with mongoDB");
    
})
.catch(()=>{
    console.log("something occurred while connecting mongoose with mongoDB");
    
})