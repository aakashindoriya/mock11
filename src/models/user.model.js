let mongoose=require("mongoose")

let userSchema=new mongoose.Schema({
    name:{
        require:true,type:String
    },
    email:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,required:true
    },
    role:{
        type:String,enum:["admin","student"],default:"student"
    }
})

const MUser=mongoose.model("muser",userSchema)

module.exports=MUser;