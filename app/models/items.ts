import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
}, { timestamps: true });

const User = mongoose.model("User", itemSchema, "users"); 
export default User
