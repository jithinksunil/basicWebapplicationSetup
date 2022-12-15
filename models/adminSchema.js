const mongoose=require('mongoose')

const newSchema=new mongoose.Schema({//defining structure of collections
    email:String,
    password:String,
    name:String,
    age:String
})

const adminCollection=new mongoose.model('admin_collection',newSchema)//creating collection using the defined schema and assign to new Model

module.exports=adminCollection