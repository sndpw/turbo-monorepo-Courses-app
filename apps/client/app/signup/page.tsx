"use client";
import { Signup } from "@repo/ui/components/Signup";
import axios from "axios";

export default function SignUp() {
  const handleSignUp = async (username: string, password: string) => {
    try {
      const response = await axios.post("/api/signup", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      console.log(response.data); // You can handle the response as needed
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <Signup onClick={handleSignUp} />
    </div>
  );
}
