import mongoose,{Model} from "mongoose";
import { IUser } from "../interfaces/userInterfaces";

const userSchema = new mongoose.Schema<IUser>({
    fullName:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,

    },
    profilePicture:{
        type:String,
        // required:true,
    },
    sex:{
        type:String,
        enum:["Male","Female"],
        required:true,
    },
    weight:{
        type:Number,
        required:true,
    },
    height:{
        type:Number,
        required:true,
    },
    subscriptionState:{
        type:String,
        enum:["ACTIVE","IN_ACTIVE"],
    },
    subscriptionType:{
        type:String,
        enum:["INDIVIDUAL","FAMILY"],
    }


});



// export const User = mongoose.model("User", userSchema);
export const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);