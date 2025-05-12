import { Request } from "express";
import { doubleCsrf } from "csrf-csrf";
import { CSRF_SECRET } from "../config/env.ts";

// configuration token csrf
const csrfOptions = {
    getSecret: () => CSRF_SECRET,
    getSessionIdentifier: (req: Request) => req.ip || "anonymous",
    cookieName: "psifi.x-csrf-token",
    cookieOptions: {
        httpOnly: true, 
        sameSite: "strict" as const, 
        secure: false,
        path: "/"      
    },
    size: 64, //  hash token CSRF
    ignoredMethods: ["GET", "HEAD", "OPTIONS"] as ("GET" | "HEAD" | "OPTIONS")[], 
    getTokenFromRequest: (req: Request) => req.headers["x-csrf-token"] as string,
    maxAge: 15 * 60
}

export const { 
    invalidCsrfTokenError, 
    generateCsrfToken, 
    doubleCsrfProtection, 
} = doubleCsrf(csrfOptions);