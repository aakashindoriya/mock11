const jwt=require("jsonwebtoken");



const Auth=async (req,res,next)=>{
    let token=req.headers["authorization"]
    if(!token){
      return  res.status(404).send("Please Login")
    }
    try{
        let varification= jwt.verify(token,process.env.TokenSecret)
        if(varification){
            req.userId=varification.id
            req.userrole=varification.role
            next()
        }else{
            res.status(401).send("invalid token")
        }
    }catch(e){
        return res.status(404).send(e.message)
    }
     
}

module.exports=Auth