
import Api from "@/lib/axios";

export const authenticate = async (email: string, password: string) => {
  try {
    const res = await Api.post("/auth/signin", { email, password });
    return res;
  } catch (err) {
    throw err;
  }
};


