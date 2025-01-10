import { sign } from "crypto";
import express from "express";
import { Request, Response } from "express";
import { authModel } from "../../db/schema/auth";
import { AuthService } from ".";
import { environment } from "../..";
import dotenv from "dotenv"
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
      console.log("passward corect")
      const token=AuthService.generateToken(String(user._id),user.email,user.role)
   
      res.cookie("auth_token", token, {
        secure: false,
        sameSite: "lax",
        domain: process.env.TOKEN_DOMAIN || "localhost",
      });
      res.send({ user });
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

authRouter.post("/signin", signin);

export { authRouter };
