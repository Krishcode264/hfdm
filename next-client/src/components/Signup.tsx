"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authenticate } from "@/actions/auth";
import { AxiosError } from "axios";
import { useSetRecoilState } from "recoil";
import { userAtom } from "@/store/atoms/userAtom";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const setUser = useSetRecoilState(userAtom);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const result = await authenticate(email, password);
      if (result.data.user) {
        setUser(result.data.user);
        router.push("/");
      } else {
        setError(result.data.error || "Authentication failed");
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(
          err.response?.data.message || "An error occurred. Please try again."
        );
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="w-full max-w-[90vw] sm:max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full max-w-md bg-white p-4 sm:p-8 rounded-lg shadow-md mx-auto"
      >
        <h3 className="text-2xl font-semibold text-center mb-6">
          Sign In to Your Account
        </h3>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          Sign In
        </Button>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <p className="text-center text-sm text-gray-600">
          If you're having trouble signing in, please contact your
          administrator.
        </p>
      </form>
    </div>
  );
}
