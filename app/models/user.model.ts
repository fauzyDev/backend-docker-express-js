import mongoose from "mongoose";
import argon2 from "argon2";
import { IsUser } from "../types/types.ts";

const userSchema = new mongoose.Schema <IsUser>({
  name: { type: String, require: true },
  age: { type: Number, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  avatar: { type: String },
  isVerified: { type: Boolean, default: false }
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  const user = this as IsUser;

  if (!user.isModified("password")) return next();

  try {
    user.password = await argon2.hash(user.password);
    next()
  } catch (error) {
    next(error as Error);
  }
})

userSchema.methods.comparePassword = async function (password: string) {
  return await argon2.verify(this.password, password)
}

const User = mongoose.model <IsUser>("User", userSchema, "users");
export default User
