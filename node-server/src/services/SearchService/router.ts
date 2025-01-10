import express, { Request, Response } from "express";
import { patientModel } from "../../db/schema/patient";
import { pantryStaffModel } from "../../db/schema/pantryStaff";

export const searchRouter = express.Router();

const searchHandler = async (req: Request, res: Response): Promise<any> => {
  const { name } = req.query;

  if (!name || typeof name !== "string") {
    return res
      .status(400)
      .json({ message: "Name query parameter is required" });
  }

  try {
    // Remove quotes if present in the search term
    const cleanSearchTerm = name.replace(/['"]+/g, "");

    // Create a case-insensitive regex pattern for the search
    const searchRegex = new RegExp(cleanSearchTerm, "i");

    // Search in both collections using Promise.all for concurrent execution
    const [patientResults, pantryStaffResults] = await Promise.all([
      // Search in patients collection
      patientModel
        .find({
          name: searchRegex,
        })
        .lean()
        .exec(),

      // Search in pantryStaff collection
      pantryStaffModel
        .find({
          name: searchRegex,
        })
        .lean()
        .exec(),
    ]);

    // Add type field to distinguish between patients and staff
    const typedPatientResults = patientResults.map((patient) => ({
      ...patient,
      type: "patient",
      // Simple relevance score based on string position
      score:
        patient.name.toLowerCase().indexOf(cleanSearchTerm.toLowerCase()) === 0
          ? 1
          : 0.5,
    }));

    const typedPantryStaffResults = pantryStaffResults.map((staff) => ({
      ...staff,
      type: "pantryStaff",
      // Simple relevance score based on string position
      score:
        staff.name.toLowerCase().indexOf(cleanSearchTerm.toLowerCase()) === 0
          ? 1
          : 0.5,
    }));

    // Combine and sort results
    const combinedResults = [...typedPatientResults, ...typedPantryStaffResults]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    return res.status(200).json({
      results: combinedResults,
      total: combinedResults.length,
    });
  } catch (error) {
    console.error("Search error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// Register the route
searchRouter.get("/", searchHandler);
