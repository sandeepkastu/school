const express=require('express')
const mongoose=require('mongoose')
const router=require('./routes/crud')


const app=express();
mongoose.set('strictQuery', true);
mongoose.connect('School',{useUrlParser:true,useUnifiedTopology:true},()=>{console.log('connected')})
const port=5000;

app.use('/',router)

app.listen(port,()=>{console.log('server is running at ', port)})