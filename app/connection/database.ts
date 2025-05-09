import mongoose from "mongoose";
import { uri } from "../config/env.ts";

const connectDB = async () => {
    try {
        await mongoose.connect(uri, { tls: true, tlsAllowInvalidCertificates: true });
        console.log("🟢 MongoDB Connected");
    } catch (error) {
        console.error("🔴 MongoDB Error:", error);
    }
}

export default connectDB;