const express=require('express')
const app=express()
const sessions=require('express-session')
const expressLayouts=require('express-ejs-layouts')
const userRouter=require('../basicWebapplicationSetup-master/routes/userRoute')
const adminRouter=require('../basicWebapplicationSetup-master/routes/adminRoute')

/*---------------------------Setups-----------------------------*/
app.use(express.urlencoded({extended:true}))//to get data from post method

app.use(sessions({//setup session
    resave:true,//to resave the session
    saveUninitialized:true,
    secret:'khfihuifgyscghi6543367567vhbjjfgt45475nvjhgjgj+6+9878', //random hash key string to genarate session id     
}))

app.use((req, res, next) => {//setup cache
    res.set("Cache-Control", "no-store");
    next();
});

app.use(express.static('./public/jithin'));//static file setup for folders in public folder,jithin is a folder inside the public folder
app.use(expressLayouts)//setting up layout
app.set('views','./views')//setting up directory for view engine, here views is the folder
app.set('view engine','ejs')//setting up  view engine

const mongodb=require('./config/mongooseConnection')
mongodb()//involked the imported function fron mongooseConnection.

app.listen(3000,()=>console.log('Server started'))

app.use('/',userRouter) //enable the user router
app.use('/',adminRouter)//enable the admin router