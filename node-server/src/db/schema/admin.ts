import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  authId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  contactNumber: {
    type: String,
    required: true,
    unique: true,
  },
  permissions: {
    type: [String], 
    default: [],
  },
});

const adminModel = mongoose.model("Admin", adminSchema);
export {adminModel}