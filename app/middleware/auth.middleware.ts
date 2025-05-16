import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.ts";
import { response } from "../res/res.ts";

// token jwt request cookie
export const authenticationToken = (req: Request, res: Response) => {
    const token = req.cookies.token;

    if (!token) {
      return response(401, { Success: false }, "Unauthorized", res)
    }

    // token jwt verify
    jwt.verify(token, JWT_SECRET, (error: Error, user: { name: string }) => {
      if (error) {
        return response(403, { Success: false }, "Forbidden", res)
      }
        req.user = user
        return response(500, null, "Terjadi Kesalahan", res)
    })
}