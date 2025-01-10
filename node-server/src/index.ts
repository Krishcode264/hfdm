import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { authRouter } from "./services/AuthService/router";
import { connectDB } from "./db/connect";
import { plantryRouter } from "./services/PlantryService/router";
import { patientRouter } from "./services/PatientService/router";
import { searchRouter } from "./services/SearchService/router";
import { Request, Response } from "express";
dotenv.config();
export const environment = process.env.NODE_ENV;
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://hfdm-ten.vercel.app"],
    credentials: true,
  })
);

app.get("/health", (req: Request, res: Response) => {
  console.log("getting req on health route");
  res.send({ message: "healthy again" });
});
app.use(express.json());
app.use("/auth", authRouter);
app.use("/patients", patientRouter);
app.use("/plantry", plantryRouter);
app.use("/search", searchRouter);

async function init() {
  await connectDB(process.env.MONGO_URI as string);

  app.listen(process.env.PORT || 8080, async () => {
    console.log("sever is running on port 8080 ||", process.env.PORT);
  });
}

init();
