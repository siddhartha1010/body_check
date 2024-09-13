import { Document } from "mongoose";

export interface IUser extends Document {
    fullName:string,
    phoneNumber:string,
    age:number,
    height:number,
    profilePicture:string,
    sex:"Male" | "Female",
    weight:number,
    subscriptionState?: "ACTIVE" | "IN_ACTIVE";
    subscriptionType?: "INDIVIDUAL" | "FAMILY";


}
    
