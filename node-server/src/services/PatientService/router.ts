import express from "express";
import { Response, Request } from "express";
import { patientModel } from "../../db/schema/patient"; // Assuming you have a Patient model
import { authModel } from "../../db/schema/auth"; // Auth model
import { patientZodSchema } from "../../util/zodSchema"; // Zod schema for patient

import { ZodError } from "zod";

export const patientRouter = express.Router();

async function createPatient(req: Request, res: Response) {
  const {
    email,
    name,
    contactInfo,
    emergencyContact,
    diseases,
    allergies,
    roomNumber,
    bedNumber,
    floorNumber,
    age,
    gender,
  } = req.body;
console.log(req.body,"req.body")
  try {

    patientZodSchema.parse(req.body); 


    // 3. Create Auth record first
    const authData = await authModel.create({
      email,
      password:email,
      role: "Patient", 
    });

    
    const patientData = await patientModel.create({
      authId: authData._id, 
      name,
      contactInfo,
      emergencyContact,
      diseases,
      allergies,
      roomNumber,
      bedNumber,
      floorNumber,
      age,
      gender,
    });


    res.status(200).send({
      message: "Patient successfully created"
    });
  } catch (err) {
    if (err instanceof ZodError) {
    
      res.status(400).send({
        message: `Validation error:${err.errors[0]}`,
        errors: err.errors,
      });
    } else {
   
      res.status(400).send({
        message: "Error creating patient",
        error: err,
      });
    }
  }
}


patientRouter.post("/", createPatient);
