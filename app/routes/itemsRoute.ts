import express from "express";
import { Request, Response } from "express";
import User from "../models/items.ts";
import { response } from "../res/res.ts";

export const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const items = await User.create(req.body);
  return response(201, items, "Created Succes", res);
});
 
// Read All
router.get("/", async (req: Request, res: Response) => {
  const items = await User.find();
  return response(200, items, "Succes", res);
});

// Read One
router.get("/:id", async (req: Request, res: Response) => {
  const items = await User.findById(req.params.id);
  return response(200, items, "Succes", res)
});

// Update
router.patch("/:id", async (req: Request, res: Response) => {
  const items = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return response(200, items, "Updated Succes", res)
});

// Delete
router.delete("/:id", async (req: Request, res: Response) => {
  await User.findByIdAndDelete(req.params.id);
  return response(204, null, "Deleted Succes", res)
});

