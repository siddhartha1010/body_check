import { Request, Response } from "express";
import { User } from "../models/userModels";
import { uploadOnCloudnary } from "../config/cloudnary";

const createUser = async (req: Request, res: Response) => {
  try {
    const { fullName, phoneNumber, sex, weight, age, height } = req.body;
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
    // console.log(photo)
    // if (!photo) throw new Error("Could not upload image");
    const newUser = await User.create({
      fullName,
      phoneNumber,
      sex,
      weight,
      age,
      height,
      profilePicture: profilePicture.secure_url,
    });
    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: { newUser, profilePicture: profilePicture.secure_url },
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

const getUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      message: "Users fetched successfully",
      data: { users },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
      data: null,
    });
  }
};

export { createUser, getUser };
