import jwt, { type JwtPayload } from "jsonwebtoken";
import { Request, Response, Handler, type NextFunction } from "express";
export function isAutherised(req: Request, res: Response, next: NextFunction) {
  const token =
    req.cookies.auth_token ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string);

    if (decoded && typeof decoded !== "string") {
      const { role, id, email } = decoded as JwtPayload;

      console.log(role,"from is valid mifdle ware ")
      req.body.user = { id, email, role };

      next();
    }
  } catch (error) {
    console.error("JWT verification failed:", error);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
}
