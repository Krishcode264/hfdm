import mongoose from "mongoose";

const pantrySchema = new mongoose.Schema({
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
  contactInfo: { type: String, required: true },
  location: { type: String, required: true },
  shift: {
    type: String,
  },
  assignedTasks: {
    type: [String],
    default: [],
  },
});

export const pantryStaffModel = mongoose.model("PantryStaff", pantrySchema);

