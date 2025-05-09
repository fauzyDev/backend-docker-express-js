import mongoose from "mongoose";
import argon2 from "argon2";

export interface IsUser extends mongoose.Document {
  name: string,
  age: number,
  email: string,
  password: string
  comparePassword: (candidate: string) => Promise<boolean>;
}

const itemSchema = new mongoose.Schema<IsUser>({
  name: { type: String, require: true },
  age: { type: Number, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true }
}, { timestamps: true });

itemSchema.pre("save", async function (next) {
  const user = this as IsUser;

  if (!user.isModified("password")) return next();

  try {
    user.password = await argon2.hash(user.password);
    next()
  } catch (error) {
    next(error as Error);
  }
})

itemSchema.methods.comparePassword = async function (password: string) {
  return await argon2.verify(this.password, password)
}

const User = mongoose.model<IsUser>("User", itemSchema, "users");
export default User
