let express=require("express")
const {UserModel,ProductModel}=require("../schema/FoodModel");

let userRoutes=express.Router()
 
userRoutes.post("/signup",async(req,res)=>{
    console.log(req.body)
    try {
        const {name,email,password}=req.body
        let newuser=new UserModel({name,email,password})
        await newuser.save()

       res.status(200).send({message:"The Data is Saved"})
    } catch (error) {
        console.log(error)
    }
})

userRoutes.post("/food",async(req,res)=>{
    console.log(req.body)
    try {
    
        await ProductModel.insertMany(req.body)

       res.status(200).send({message:"The Data is Saved"})
    } catch (error) {
        console.log(error)
    }
})



module.exports={userRoutes}