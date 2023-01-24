let mongoose=require("mongoose");


let applicationSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"muser"},
    job:{type:mongoose.Schema.Types.ObjectId,ref:"mjob"}

})

const Mapplication=mongoose.model("application",applicationSchema)

module.exports=Mapplication;