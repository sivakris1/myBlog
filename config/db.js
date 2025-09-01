import mongoose from "mongoose"

export const connectDB = async() =>{
    console.log("mongo connected")
    await mongoose.connect(process.env.MONGO_URL)
}