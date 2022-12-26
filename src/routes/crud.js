const router=require('express').Router()
const Student=require('../models/studentSchema')


router.post('/v1',async(req,res)=>{
    try{
    const data= await Student.create(req.body)
    res.json({
        status:"success",
        data:data
    })
}
catch (e){
    res.json({
        status:"fail",
        message:e.message
    })
}
})

router.get('/v1',async(req,res)=>{
    const data=await Student.find()
    res.json({
        status:"success",
        data:data
    })
})

 router.put('/v1/:name',async(req,res)=>{
    const data=await Student.findOne({_id:req.params.name})
    res.json({
        status:"success",
        data:data
    })
}) 
module.exports=router