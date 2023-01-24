const express=require("express");
const MJobs = require("../models/Job.model");
const app=express.Router()
app.get("/",async(req,res)=>{


    try {
        let {company, location,contract,page}=req.query
        let Query={}
        let Sort={}
        if(company){
            Query={...Query,company:company}
        }
        if(location){
            Query={...Query,location:location}
        }
        if(contract){
            Query={...Query,contract:contract}
        }
        
        let ress= await MJobs.find(Query).skip(page-1*10).limit(10)
       return res.status(201).send(ress)
    }catch(e){
        return res.status(404).send(e.message)
    }
})

app.post("/",async(req,res)=>{
    if(req.userrole!="admin"){
      return  res.status(421).send("Not an admin")
    }
    try {
        let job=await MJobs.create({...req.body})
        return res.status(201).send({message:"job created Successfully",job})
    } catch (error) {
        return res.status(401).send(error.message)
    }
})
app.patch("/:id",async(req,res)=>{
    if(req.userrole!="admin"){
      return  res.status(421).send("Not an admin")
    }
    try {
        let job=await MJobs.updateOne({_id:req.params.id},{...req.body})
        return res.status(201).send(job)
    } catch (error) {
        return res.status(401).send(error.message)
    }
})
app.delete("/:id",async(req,res)=>{
    if(req.userrole!="admin"){
      return  res.status(421).send("Not an admin")
    }
    try {
        let job=await MJobs.deleteOne({_id:req.params.id})
        return res.status(201).send(job)
    } catch (error) {
        return res.status(401).send(error.message)
    }
})

module.exports=app