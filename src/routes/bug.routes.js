const express=require("express");
const { GetAllBugs} = require("../controllers/bug.controller");
const Mbug = require("../models/bug.model")

const app=express.Router();

app.get("/",GetAllBugs);
app.post("/",async(req,res)=>{
    try{
        let bugs=await Mbug.create(req.body)

       res.status(200).send(bugs)
    }catch(e){
       res.status(400).send(e.message)
    }

});
app.delete("/:id",async (req,res)=>{
    try{
        let bugs=await Mbug.findByIdAndDelete(req.params.id)
        res.status(200).send("Bug deleted Successfully")
    }catch(e){
        return res.status(400).send(e.message)
    }

});
app.patch("/:id",async (req,res)=>{
    try{
        let bugs=await Mbug.updateOne({_id:req.params.id},{$set:{status:req.body.status}})

        res.status(200).send("StatusChanged")
    }catch(e){
        return res.status(400).send(e.message)
    }

});



module.exports=app