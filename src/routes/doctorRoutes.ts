import express from "express";
import { Request, Response, NextFunction } from "express";
import { createDoctor,getAllDoctor } from "../controllers/doctorControllers";
import { upload } from "../middlewares/multermiddlewares";
const router = express.Router();

// router.get("/h",(req:Request,res:Response,next:NextFunction)=>{
//     res.send("Hello World!");
// });

// router.post("/createUser",createUser);
router
  .route("/createDoctor")
  .post(upload.fields([{ name: "profilePicture", maxCount: 1 }]), createDoctor);
router.get("/getDoctor",getAllDoctor)

export default router;
