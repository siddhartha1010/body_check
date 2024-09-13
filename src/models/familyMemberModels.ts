import mongoose from "mongoose";
import { IFamilyMember } from "../interfaces/familyMemberInterfaces";



const familymemberSchema = new mongoose.Schema<IFamilyMember>({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  profilePicture: {
    type: String,
    // required: true,
  },
 

});



export const familyMember = mongoose.model<IFamilyMember>("FamilyMember", familymemberSchema);