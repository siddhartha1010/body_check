import { Document } from "mongoose";


export interface IFamilyMember extends Document {
  fullName: string;
  age: number;
  sex: "Male" | "Female";
  weight: number;
  height: number;
  profilePicture?: string;
//   relationship: string;
//   userId: string;
}