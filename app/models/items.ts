import mongoose from "mongoose";
import { Hash } from "node:crypto";

const itemSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String
}, { timestamps: true });

const User = mongoose.model("User", itemSchema, "users"); 
export default User
