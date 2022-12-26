const mongoose=require('mongoose')


const StudentSchema=new mongoose.Schema({
    name:String,
    class:Number
})

const Student=mongoose.model('class',StudentSchema)
module.exports=Student