"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../Providers/AuthProvider";
import { useEffect, useState } from "react";
import Email from "../Email";
import PasswordInput from "../Password";
import { signIn } from "@/firebase/auth";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import FacebookButton from "../FacebookButton";
import GoogleButton from "../GoogleButton";

export default function SignIn() {
  const authContext = useAuth();
  const user = authContext?.user;
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { pending } = useFormStatus();

  const handleSign = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signIn(email, password);
    if (response.success) router.push("/");
    else setError(response.message || "Sign in failed.");
  };

  useEffect(() => {
    if (user) router.push("/");
  });
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen">
      <div className="bg-[#ddd] dark:bg-[#222] p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSign} className="space-y-4">
          <Email email={email} setEmail={setEmail} />
          <PasswordInput password={password} setPassword={setPassword} />
          {error ? (
            <p className="text-red-500 max-h-[20px] mt-1">{error}</p>
          ) : (
            <div className="h-[26px]"></div>
          )}
          <button
            type="submit"
            className="w-full bg-main p-2 rounded disabled:bg-gray-500"
            disabled={pending}
          >
            {pending ? "Signing ..." : "Sign In"}
          </button>
        </form>
        <GoogleButton setError={setError} />
        <FacebookButton setError={setError} />
        <Link
          href="/signup"
          className="hover:underline hover:text-main transition-all duration-300 my-4"
        >
          Create a new account
        </Link>
      </div>
    </div>
  );
}
