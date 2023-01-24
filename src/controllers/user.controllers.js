const jwt=require("jsonwebtoken");
const argon2 = require('argon2');
const Muser=require("../models/user.model")
const Signup=(async (req,res)=>{
     
    let {email,password,name}=req.body
        password= await argon2.hash(password);
        
    try {
        let existinguser=await Muser.findOne({email})
        
        if(existinguser){
            res.status(401).send("user already exist")
        }
        else{
           try {
            let role="student"
            let arr=email.split("@")
            if(arr[1]==="masaischool.com"){
                role="admin"
            }

            let user =await Muser.create({email,password,name,role})
            res.status(201).send({message:"signin successfull",user})
           }catch(e){
            res.status(404).send(e.message)
           }
        }
    }
    catch(e){
        res.status(404).send(e.message)
    }
})
// -------------------------------------------------------------------------------------------------------
const Login=(async(req,res)=>{
    let {email,password}=req.body
    try{
   
        let user=await Muser.findOne({email})

        if(user){
          let varifieduser=  await argon2.verify(user.password, password)
        if(varifieduser){
            let token=jwt.sign({id:user._id,email:user.email,role:user.role},process.env.TokenSecret)
           
        return res.send({message:"login sucessfull",token})
            
        }else{
            return res.status(404).send("Invalid credentials")
        }
        
        }else{
            return res.status(404).send("user not found")
        }

    }catch(e){
       
        res.status(401).send(e.message)
    }
    
})

module.exports={Signup,Login}