let mongoose=require("mongoose")

let JobSchema=new mongoose.Schema({

company:String,
position:String,
contract:String,
location:String  
})

const MJobs=mongoose.model("mjob",JobSchema)

module.exports=MJobs;