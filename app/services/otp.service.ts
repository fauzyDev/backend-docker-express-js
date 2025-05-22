import Otp from "../models/otp.model.ts";
import User from "../models/user.model.ts";

export const generateOtp = (length = 6) => {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10)
    }
    return otp
}

export const generateSaveOtp = async (email: string, expery: number): Promise<string> => {
    const code = generateOtp();
    const expiresAt = new Date(Date.now() + expery);
    await Otp.create({ email, code, expiresAt });
    return code
}

export const verifyOtp = async (email: string, code: string): Promise<boolean> => {
    const record = await Otp.findOne({ email, code });
    if (!record) return false;

    if (record.expiresAt < new Date()) {
        await Otp.deleteMany({ email });
        return false;
    };

    const user = await User.findOne({ email });
    if (!user) return false;

    await User.findOneAndUpdate({ email }, { isVerified: true });
    await Otp.deleteMany({ email });
    return true;
}