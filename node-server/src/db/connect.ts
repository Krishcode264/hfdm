import mongoose from "mongoose";

export async function connectDB(uri: string){
    if(!uri){
        throw new Error("uri is not available ")
    }
 try{
    await mongoose.connect(uri)
    console.log("connected DB ")
 }
 catch(err){
console.log(err)
 }
}