import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  deliveryGuyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryStaff",
    required: false,
  },

  pantryStaffAssigned: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"PantryStaff",
    required:true,
  },
  orderDetails: {
    type: String,
    required: true,
  },
  deliveredTime: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["Prepering", "Pending", "In Transit", "Delivered", "Done"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
