let mongoose=require("mongoose")

let JobSchema=new mongoose.Schema({

company:{type:String,require:true},
position:{type:String,require:true},
contract:{type:String,require:true},
location:{type:String,require:true}
})

const MJobs=mongoose.model("mjob",JobSchema)

module.exports=MJobs;