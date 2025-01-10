import { sign } from "crypto";
import express from "express";
import { Request, Response } from "express";
import { authModel } from "../../db/schema/auth";
import { AuthService } from ".";
import { environment } from "../..";
import dotenv from "dotenv"
import Jwt from "jsonwebtoken";
dotenv.config()

const authRouter = express.Router();

async function signin(req: Request, res: Response) {

  const { email, password } = req.body;
  console.log("getting req" , email,password)
  try {
    if(!email || !password){
      res.status(400).send({message:"fill all required credentials "})
    }
    const user = await authModel.findOne({ email });
    if (!user) {
      res.status(400).send({ message: "user with email does not exist" });
      return
    }

    if (user?.password === password) {
      console.log("passward corect here ")
      const token=AuthService.generateToken(String(user._id),user.email,user.role)
 
      res.send({token});
      return
    } else {
      res.status(401).send({ message: "passward does not match " });
      return
    }
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: "error signin up, try again" });
  }
}



async function verifyRole(req:Request,res:Response){
const {token}=req.query
console.log("token",req.query)
try{
  if( typeof token === "string" ){
 const payload = Jwt.verify(token, process.env.JWT_SECRET as string);
 console.log(payload, "payload ");
 res.send({ payload });
 return 
  } 
 res.status(401).send({ message: "token is not valid " });
} catch(err){
  console.log(err,"eror verifiyng jwt")
  res.status(401).send({message:"error verifying jwt"})
}
 

}
authRouter.post("/signin", signin);
authRouter.get("/role",verifyRole)
export { authRouter };
