const mongoose=require('mongoose')

/********************Connection setUp of mongoose Driver**************************/ 
function mongodb(){
    mongoose.connect('mongodb://127.0.0.1:27017/furniture_kart_database',{
        useNewUrlParser:true,
        useUnifiedTopology:true
        },(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Data Base connected')
        }
    })
}

module.exports=mongodb