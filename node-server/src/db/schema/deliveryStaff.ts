import mongoose from "mongoose";

const deliveryStaffSchema = new mongoose.Schema({
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
  vehicleType: {
    type: String, 
  },
  currentOrders: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Order",
    default: [],
  },
  location: {
    type: String, 
    required: false,
  },
});
const deliveryStaffModel = mongoose.model("DeliveryStaff", deliveryStaffSchema);
exports={deliveryStaffModel}