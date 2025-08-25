"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || error.error || "Login failed");
      }

      const result = await res.json();
      localStorage.setItem("accessToken", result.accessToken);
      router.push("/");
    } catch (err) {
      setApiError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Sign in</h1>
        <p className="text-sm text-gray-600 font-[400]">
          {"If you don't have an account register"}
          <br />
          You can{" "}
          <span className="text-[#0C21C1] cursor-pointer hover:underline">
            Register here !
          </span>
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <FormInput
          id="username"
          label="Username"
          value={username}
          placeholder="Enter your email address"
          onChange={setUsername}
          error={errors.username}
          icon={Mail}
        />

        <PasswordInput
          value={password}
          onChange={setPassword}
          error={errors.password}
        />

        {apiError && (
          <p className="text-red-500 text-sm text-center">{apiError}</p>
        )}

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm text-gray-600">
              Remember me
            </Label>
          </div>
          <button
            type="button"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Forgot Password ?
          </button>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-[#0C21C1] hover:bg-blue-700 text-white rounded-full mt-8"
        >
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
