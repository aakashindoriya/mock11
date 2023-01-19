const express =require("express")
require("dotenv").config()
let cors=require("cors")
let connect=require("./config/database")
const UserRouter=require("./routes/user.routes")
const BugRouter=require("./routes/bug.routes")
const { request } = require("express")
const Auth=require("./middleware/Auth.mddleware")
const app=express()
app.use(express.json())
app.use(cors())

app.use("/user",UserRouter)
app.use("/bugs",Auth,BugRouter)

app.listen(process.env.PORT,()=> {
    connect()
    console.log("listning")
})