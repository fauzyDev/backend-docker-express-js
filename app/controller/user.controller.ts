import { Request, Response } from "express";
import User from "../models/user.model.ts";
import { response } from "../res/res.ts";

export const uploadAvatar = async (req: Request, res: Response) => {
    const files = req.file
    const user = await User.findByIdAndUpdate(req.body.id, { avatar: files }, { new: true });
    return response(200, user, "Avatar upload", res)
}