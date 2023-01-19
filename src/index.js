const express =require("express")
require("dotenv").config()
let cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("yo yo yo")
})

app.listen(process.env.PORT,()=>console.log("listning"))