import { authModel } from "../../db/schema/auth";

export class UserService {
  static async createUser(data: any) {
    try {
      await authModel.create(data);
    } catch (err) {
        console.log("error creating user ",err)
    }
  }
}
