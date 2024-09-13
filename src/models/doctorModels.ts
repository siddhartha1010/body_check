import mongoose, { Model } from "mongoose";
import { IDoctor } from "../interfaces/doctorinterfaces";

const doctorSchema = new mongoose.Schema<IDoctor>({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    // required: [true, "Please upload a profile picture"],
  },
  specialist: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["busy", "available"],
    default: "available",
  },
});

export const Doctor: Model<IDoctor> = mongoose.model<IDoctor>(
  "Doctor",
  doctorSchema
);
