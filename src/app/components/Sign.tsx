"use client";
import Link from "next/link";
import { useState } from "react";
import { signUp, signIn, signInWithGoogle } from "@/app/firebase/auth";
import { useRouter } from "next/navigation";

export default function Sign({ type }: { type: boolean }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSign = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await (type
      ? signIn(email, password)
      : signUp(email, password));
    if (response.success) router.push("/");
    else setError(response.message || "Sign failed.");
  };
  const handleGoogle = async () => {
    const response = await signInWithGoogle();
    if (response.success) router.push("/");
    setError(response.message || "Google Sign-in failed.");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl text-black font-bold mb-4">
          {type ? "Sign In" : "Sign Up"}
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSign} className="space-y-4 text-black">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            {type ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <button
          onClick={handleGoogle}
          className="mt-4 w-full bg-red-500 text-white p-2 rounded"
        >
          Sign in with Google
        </button>
      </div>
      <Link
        href={type ? "/signup" : "/signin"}
        className="text-black bg-blue-300 p-4 rounded-lg"
      >
        {type ? "Create a new account" : "Already have an account"}
      </Link>
    </div>
  );
}
