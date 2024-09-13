import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, 
});

const uploadOnCloudnary = async (localFilePath: string | undefined) => {
  try {
    if (!localFilePath) {
      return null;
    }
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //ya samma aauda file upload vayo
    // console.log("file uploaded", response.url);
    // console.log(response, "response");
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return response;
  } catch (error) {
    // console.log("error", error);
    // fs.unlinkSync(localFilePath); //yo navye samma tala najni.remove garxa locally saved temporay saved file as upload operation gets failed
  }

};

export { uploadOnCloudnary };
