import express from "express";
import { Request, Response } from "express";
import User from "../models/user.model.ts";
import { uploadAvatar } from "../controller/user.controller.ts";
import { upload } from "../middleware/upload.middleware.ts";
import { response } from "../res/res.ts";

export const userRouter = express.Router();

// Post
userRouter.post("/:id/avatar", upload.single('avatar'), uploadAvatar);
 
// Read All
userRouter.get("/", async (req: Request, res: Response) => {
  const items = await User.find().select("name age email")
  return response(200, items, "Succes", res);
});

// Read One
userRouter.get("/:id", async (req: Request, res: Response) => {
  const items = await User.findById(req.body.id);
  return response(200, items, "Succes", res)
});

// Update
userRouter.patch("/:id", async (req: Request, res: Response) => {
  const items = await User.findByIdAndUpdate(req.body.id, { new: true });
  return response(200, items, "Updated Succes", res)
});

// Delete
userRouter.delete("/:id", async (req: Request, res: Response) => {
  await User.findByIdAndDelete(req.body.id);
  return response(204, null, "Deleted Succes", res)
});

