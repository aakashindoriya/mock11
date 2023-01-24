const express =require("express")
require("dotenv").config()
let cors=require("cors")
let connect=require("./config/database")
const UserRouter=require("./routes/user.routes")
const BugRouter=require("./routes/bug.routes")
const JobRouter=require("./routes/job.routes")
const ApplicationRouter=require("./routes/application.route")
const Auth=require("./middleware/Auth.mddleware")
const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Welcome to Bugtracker")
})
app.use("/jobs",Auth,JobRouter)
app.use("/users",UserRouter);
app.use("/bugs",Auth,BugRouter)
app.use("/application",Auth,ApplicationRouter)

app.listen(process.env.PORT,()=> {
    connect()
    console.log("listning")
})