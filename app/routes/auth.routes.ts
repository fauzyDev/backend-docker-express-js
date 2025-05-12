import express from "express";
import { register, verifyOtp } from "../controller/auth.controller.ts";

export const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/verify", verifyOtp);