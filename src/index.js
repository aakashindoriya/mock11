const express =require("express")
let cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("yo yo yo")
})

app.listen(8080,()=>console.log("listning"))