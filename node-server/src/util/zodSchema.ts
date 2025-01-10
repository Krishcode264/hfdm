import { z } from "zod";

export const pantryZodSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  contactInfo: z
    .string()
    .min(10, "Contact Info must be at least 10 characters long"), 
  location: z.string().min(5, "Location must be at least 5 characters long"),
 email:z.string().email("Invalid email format")
});




export const patientZodSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  name: z.string().min(1, "Name is required"),
  contactInfo: z.string().min(1, "Contact info is required"),
  emergencyContact: z.string().min(1, "Emergency contact is required"),
  diseases: z.string().optional(),
  allergies: z.string().optional(),
  roomNumber: z.number().min(1, "Room number is required"),
  bedNumber: z.number().min(1, "Bed number is required"),
  floorNumber: z.number().int().positive(),
  age: z.number().int().positive(),
  gender: z.enum(["Male", "Female", "Other"]),
});
