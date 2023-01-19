const express=require("express");
const app=express.Router();

const {Login,Signup}=require("../controllers/user.controllers")
app.post("/signup",Signup)

app.post("/login",Login)


module.exports=app