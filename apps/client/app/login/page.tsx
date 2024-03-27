"use client";
import { Signup } from "@repo/ui/components/Signup";
import axios from "axios";

export default function SignUp() {
  const handleSignUp = async (username: string, password: string) => {
    try {
      const response = await axios.get("/api/login", {
        username,
        password,
      });
    } catch (error) {
      console.error("Error signing In:", error);
    }
  };

  return (
    <div>
      <Signup onClick={handleSignUp} />
    </div>
  );
}
