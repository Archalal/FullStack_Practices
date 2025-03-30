const express=require('express')

const userController=require('./controllers/userControllers')

const routes=new express.Router()

routes.post('/register',userController.registerControllers)

routes.post('/login',userController.loginController)


module.exports=routes