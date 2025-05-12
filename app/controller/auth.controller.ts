import { Request, Response } from "express";
import { generateOtp } from "../utils/generateOtp.ts";
import { OTP_EXPIRY } from "../config/env.ts";
import User from "../models/user.model.ts";
import Otp from "../models/otp.model.ts";
import { response } from "../res/res.ts";

export const register = async (req: Request, res: Response) => {
    const { name, age, email, password } = req.body;
    const user = await User.create({ name, age, email, password });
    const otp = generateOtp();
    await Otp.create({ email, otp, expiresAt: new Date(Date.now() + OTP_EXPIRY) })
    return response(201, user, "Created Succes", res)
}

export const verifyOtp = async (req: Request, res: Response) => {
    const { email, code } = req.body;
    const record = await Otp.findOne({ email, code });
    if (!record || record.expiresAt < new Date()) {
        return response(404, null, "Kode telah expire", res);
    }
    await User.findOneAndUpdate({ email }, { isVerified: true });
    await Otp.deleteMany({ email });
    return response(200, null, "Email Verified", res)
}