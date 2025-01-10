import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
export class AuthService {
  private static secretKey = process.env.JWT_SECRET || "";

  public static signup() {}

  public static generateToken(id: string, email: string, role: string) {
    const token = jwt.sign({ id, email, role }, this.secretKey);

    return token;
  }
}
