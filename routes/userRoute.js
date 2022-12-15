const express=require('express')
const router=express.Router()
const userCollection=require('../models/userSchema')
const userController=require('../controllers/userController')

router.get('/user',userController.login)

module.exports=router