import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const uri = process.env.MONGO_DB_API ?? ""

const connectDB = async () => {
    await mongoose.connect(uri, { tls: true, tlsAllowInvalidCertificates: true })
        .then(() => console.log("🟢 MongoDB Connected"))
        .catch((err) => console.error("🔴 MongoDB Error:", err));

}

export default connectDB