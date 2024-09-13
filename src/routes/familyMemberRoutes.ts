import express from "express";
import { Request, Response, NextFunction } from "express";
import { createFamilyMember } from "../controllers/familyMemberControllers";
import { upload } from "../middlewares/multermiddlewares";
const router = express.Router();

// router.get("/h",(req:Request,res:Response,next:NextFunction)=>{
//     res.send("Hello World!");
// });

// router.post("/createUser",createUser);
router
  .route("/createFamilyMember")
  .post(upload.fields([{ name: "profilePicture", maxCount: 1 }]), createFamilyMember);



export default router;
