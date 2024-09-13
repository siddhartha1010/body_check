import { Request, Response } from "express";
import { familyMember } from "../models/familyMemberModels";
import { uploadOnCloudnary } from "../config/cloudnary";

const createFamilyMember = async (req: Request, res: Response) => {
  try {
    const { fullName, age, sex, height, weight } = req.body;
    const files = req.files as
      | { [fieldname: string]: Express.Multer.File[] }
      | undefined;
    const imageLocalPath = files?.profilePicture
      ? files.profilePicture[0].path
      : undefined;
    // console.log(imageLocalPath)
    const profilePicture = await uploadOnCloudnary(imageLocalPath);
    if (!profilePicture || !profilePicture.secure_url) {
      throw new Error("Could not upload image or retrieve secure_url");
    }
    const newFamilyMember = await familyMember.create({
      fullName,
      age,
      sex,
      height,
      weight,
      profilePicture: profilePicture.secure_url,
    });

    res.status(201).json({
        status:"success",
        message:"Family Member Created Successfully",
        data:{
            newFamilyMember,
            profilePicture: profilePicture.secure_url,
        }
    });
  } catch (err) {
    res.status(400).json({
        status: "fail",
        message: err,
        data: null,
      });
  }
};


export {createFamilyMember};