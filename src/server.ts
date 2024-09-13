import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import doctorRoutes from "./routes/doctorRoutes";
import familyMemberRoutes from "./routes/familyMemberRoutes";

const app = express();
app.use(express.json());
const DB = `${process.env.MONGODB_URI}`;

mongoose.connect(DB, {}).then(() => {
  console.log("DB CONNECTION SUCESSFUL");
  const currentDateTime = new Date().toLocaleString();
  console.log(currentDateTime);
});

const PORT = 3000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});
app.use("/users", userRoutes);
app.use("/doctors", doctorRoutes);
app.use("/familyMembers", familyMemberRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
