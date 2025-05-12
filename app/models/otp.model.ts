import mongoose from "mongoose";
import { Otp } from "../types/types.ts";

const otpSchema = new mongoose.Schema <Otp>({
    email: String,
    code: String,
    expiresAt: Date
})

const Otp = mongoose.model <Otp>("Otp", otpSchema)
export default Otp