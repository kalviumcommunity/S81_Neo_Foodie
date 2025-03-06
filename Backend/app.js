const express=require("express")
const app=express()
const connect=require('./connection')
const {userRoutes}=require("./controllers/userRoutes")

app.use(express.json())
app.use("/user",userRoutes)



app.get("/",async(req,res)=>{
    res.send("Its running")
})

const port = process.env.PORT
app.listen(port,async()=>{
    try {
        await connect
        console.log(`app is running on http://localhost:${port}`)
    } catch (error) {
         console.log(error)
    }
   
})

