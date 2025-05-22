import dotenv from "dotenv";
dotenv.config();

export const uri = process.env.MONGO_DB_API ?? "";
export const JWT_SECRET = process.env.JWT_SECRET ?? "";
export const RESEND_SECRET = process.env.RESEND_SECRET ?? "";
export const CSRF_SECRET = process.env.CSRF_SECRET ?? ""; 
export const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID ?? "";
export const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN ?? "";
export const OTP_EXPIRY = 5 * 60 * 1000; // 5 menit