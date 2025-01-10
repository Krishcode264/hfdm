import express from "express";
import { pantryStaffModel } from "../../db/schema/pantryStaff";
import { Response, Request } from "express";
import { pantryZodSchema } from "../../util/zodSchema";
import { ZodError } from "zod";
import { authModel } from "../../db/schema/auth";
export const plantryRouter = express.Router();

async function createPlantyStaff(req: Request, res: Response) {
     const {
       email,
       password,
       name,
       contactInfo,
       location,
       shift,
       assignedTasks,
     } = req.body;

  try {
    pantryZodSchema.parse(req.body);

     const authData = await authModel.create({
       email,
       password,
       role: "PantryStaff", 
     });

    const data = await pantryStaffModel.create({authId:authData._id,...req.body});
    res.status(200).send({ message: "success creating " });
  } catch (err) {
    if (err instanceof ZodError) {
      res
        .status(400)
        .send({
          message: `Validation error : ${err.errors[0]} `,
          errors: err.errors,
        });
    }
    res.status(400).send({ message: "error creating plantry", error: err });
  }
}

plantryRouter.post("/", createPlantyStaff);
