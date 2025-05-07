import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const uri = process.env.MONGO_DB_API ?? ""

const connectDB = async () => {
    try {
        await mongoose.connect(uri, { tls: true, tlsAllowInvalidCertificates: true })
        console.log("🟢 MongoDB Connected")
    } catch (error) {
        console.error("🔴 MongoDB Error:", error);
    }
}

export default connectDB