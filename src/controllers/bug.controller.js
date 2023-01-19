const Mbug = require("../models/bug.model")

const GetAllBugs=(async (req,res)=>{
    try{
        let bugs=await Mbug.find({})
       return res.status(200).send(bugs)
    }catch(e){
        return res.status(400).send(e.message)
    }

});
const DeleteBug=(async (req,res)=>{
    try{
        let bugs=await Mbug.findByIdAndDelete(req.params.id)
        res.status(200).send("Bug deleted Successfully")
    }catch(e){
        return res.status(400).send(e.message)
    }

});

const ChangeStatus=(async (req,res)=>{
    try{
        let bugs=await Mbug.updateOne({_id:req.params.id},{$set:{status:req.body.status}})

        res.status(200).send("StatusChanged")
    }catch(e){
        return res.status(400).send(e.message)
    }

});

const Addabug=(async(req,res)=>{
    try{
        let bugs=await Mbug.create(req.body)

       res.status(200).send(bugs)
    }catch(e){
       res.status(400).send(e.message)
    }

});

module.exports={Addabug,ChangeStatus,DeleteBug,GetAllBugs}



module.exports={GetAllBugs}