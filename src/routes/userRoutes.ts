import express from "express";
import { Request, Response, NextFunction } from "express";
import { createUser,getUser } from "../controllers/userControllers";
import { upload } from "../middlewares/multermiddlewares";
const router = express.Router();

// router.get("/h",(req:Request,res:Response,next:NextFunction)=>{
//     res.send("Hello World!");
// });

// router.post("/createUser",createUser);
router
  .route("/createUser")
  .post(upload.fields([{ name: "profilePicture", maxCount: 1 }]), createUser);

router.get("/getUsers",getUser);


export default router;
