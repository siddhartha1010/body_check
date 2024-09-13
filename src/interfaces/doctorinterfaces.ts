import { Document } from "mongoose";

export interface IDoctor extends Document {
    fullName:string,
    phoneNumber:string,
    profilePicture:string,
    specialist:string,
    status: "busy" | "available"

}
    