let mongoose=require("mongoose")

let bugSchema=new mongoose.Schema({
    title:String,
    status:{
        type:String,
        enum:["Critical","Major","Medium","Low"],
        default:"Low"
    }
})

const Mbug=mongoose.model("bug",bugSchema)

module.exports=Mbug;