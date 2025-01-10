import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  authId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
  name: { type: String, required: true },
  diseases: { type: String, default: "" },
  allergies: { type: String, default: "" },
  roomNumber: { type: Number, required: true },
  bedNumber: { type:Number, required: true },
  floorNumber: { type: Number, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  contactInfo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const patientModel = mongoose.model("Patient", patientSchema);
