import express from "express";
import { Request, Response } from "express";
import User from "../models/items.ts";

export const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const item = await User.create(req.body);
  res.json(item);
});

// Read All
router.get("/", async (req: Request, res: Response) => {
  const items = await User.find();
  res.json(items);
});

// Read One
router.get("/:id", async (req: Request, res: Response) => {
  const item = await User.findById(req.params.id);
  res.json(item);
});

// Update
router.put("/:id", async (req: Request, res: Response) => {
  const item = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

// Delete
router.delete("/:id", async (req: Request, res: Response) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

