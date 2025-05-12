import mongoose from "mongoose"

export interface IsUser extends mongoose.Document {
  name: string,
  age: number,
  email: string,
  password: string,
  avatar?: string,
  isVerified: boolean
  comparePassword: (candidate: string) => Promise<boolean>;
}

export interface Otp extends mongoose.Document {
    email: string,
    code: string,
    expiresAt: Date
}