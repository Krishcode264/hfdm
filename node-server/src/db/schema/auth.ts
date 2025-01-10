

import mongoose, {Model, model,Schema}  from 'mongoose'


const authSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
   
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "PantryStaff", "DeliveryGuy", "Patient"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



const authModel=mongoose.model("Auth",authSchema)

export {authModel}