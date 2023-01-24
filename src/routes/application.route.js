const express=require("express");
const Mapplication = require("../models/application.model");
const MJobs = require("../models/Job.model");
const app=express.Router()

app.post("/:id",async(req,res)=>{
    try {
        let application=await Mapplication.create({user:req.userId,job:req.params.id})

        return res.status(201).send(application)
    } catch (error) {
        return res.status(401).send(error.message)
    }
})

module.exports=app