import mongoose from "mongoose";

const DietChartSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  meals: {
    morning: { type: String, required: true },
    evening: { type: String, required: true },
    night: { type: String, required: true },
  },
  ingredients: { type: [String], default: [] },
  instructions: { type:[ String], default: [] },
  createdAt: { type: Date, default: Date.now },
});


const dietChartModel=mongoose.model("DietChart",DietChartSchema)
exports = {dietChartModel}