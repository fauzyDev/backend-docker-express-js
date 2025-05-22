import { Request, Response } from "express";
import { response } from "../res/res.ts";
import { generateSaveOtp } from "../services/otp.service.ts";
import { OTP_EXPIRY } from "../config/env.ts";
import { sendOtpEmail } from "../services/email.service.ts";
import { userCreate } from "../services/auth.service.ts";
import { verifyOtp } from "../services/otp.service.ts";

export const register = async (req: Request, res: Response) => {
    const { name, age, email, password } = req.body;
    await userCreate(name, age, email, password);
    const otp = await generateSaveOtp(email, OTP_EXPIRY)
    await sendOtpEmail(email, otp);
    return response(201, { data: "Created Succes" }, "Send OTP sucessfully", res)
}

export const verify = async (req: Request, res: Response) => {
    const { email, code } = req.body;
    const isValid = await verifyOtp(email, code);
    if (!isValid) return response(400, null, "OTP invalid / expired", res);
    return response(200, null, "Email Verified", res)
}