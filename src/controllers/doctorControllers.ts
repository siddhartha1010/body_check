import { Request, Response } from "express";
import { Doctor } from "../models/doctorModels";
import { uploadOnCloudnary } from "../config/cloudnary";

const createDoctor = async (req: Request, res: Response) => {
  try {
    // console.log(req.body,"is the body");
    // console.log(req.files, "is the files");
    const { fullName, phoneNumber, specialist, status } = req.body;

    // console.log(req.files, "is the fiels");
    // console.log(req.files, "is the fiels");
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
    console.log(profilePicture.secure_url);

    const newDoctor = await Doctor.create({
      fullName,
      phoneNumber,
      profilePicture: profilePicture.secure_url,
      specialist,
      status,
      //   profilePicture
      //   profilePicture=req.files?.profilePicture?.url:null,

      //   profilePicture=req.files?.profilePicture?.url:null,
    });

    res.status(201).json({
      status: "success",
      message: "Doctor created successfully",
      data: {
        doctor: newDoctor,

        // profilePicture:profilePicture.url
      },
      //   imageLocalPath
    });
  } catch (err) {
    // console.log(err)
    res.status(400).json({
      status: "fail",
      message: err,
      data: null,
    });
  }
};

const getAllDoctor = async (req: Request, res: Response) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({
      status: "success",
      message: "Doctors fetched successfully",
      data: {
        doctors,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch doctors",
      data: null,
    });
  }
};

export { createDoctor, getAllDoctor };
