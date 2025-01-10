import jwt, { type JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function isAuthorized(req: Request, res: Response, next: NextFunction) {
  const token =
    req.header("Authorization")?.replace("Bearer ", "") ||
    req.cookies.auth_token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string);

    if (decoded && typeof decoded !== "string") {
      const { role, id, email } = decoded as JwtPayload;

      req.body.user = { id, email, role };

      next();
    }
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
}
