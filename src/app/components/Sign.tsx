"use client";
import Link from "next/link";
import { useState } from "react";
import { signUp, signIn, signInWithGoogle } from "@/app/firebase/auth";
import { useRouter } from "next/navigation";

export default function Sign({ type }: { type: boolean }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const router = useRouter();

  const handleSign = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await (type
      ? signIn(email, password)
      : signUp(email, password, userName, firstName, lastName, mobileNumber));
    if (response.success) router.push("/");
    else setError(response.message || "Sign failed.");
  };
  const handleGoogle = async () => {
    const response = await signInWithGoogle();
    if (response.success) router.push("/");
    setError(response.message || "Google Sign-in failed.");
  };

  return (
    <div className="container flex flex-col items-center justify-center h-screen">
      <div className="bg-[#ddd] dark:bg-[#222] p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          {type ? "Sign In" : "Sign Up"}
        </h2>
        <form onSubmit={handleSign} className="space-y-4">
          <div className="email w-full flex flex-col gap-2">
            <label className="pl-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 shadow-md rounded focus:outline-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password">
            <label className="password pl-2">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 shadow-md rounded focus:outline-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!type && (
            <>
              <div className="userName">
                <label className="pl-2">UserName</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="UserName"
                  className="w-full p-2 shadow-md rounded focus:outline-0"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="firstName">
                <label className="pl-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full p-2 shadow-md rounded focus:outline-0"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="lastName">
                <label className="pl-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="last Name"
                  className="w-full p-2 shadow-md rounded focus:outline-0"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mobile">
                <label className="pl-2">Mobile number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  className="w-full p-2 shadow-md rounded focus:outline-0"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
            </>
          )}
          <button type="submit" className="w-full bg-main p-2 rounded">
            {type ? "Sign In" : "Sign Up"}
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={handleGoogle}
          className="mt-4 w-full bg-red-500 p-2 rounded"
        >
          Sign in with Google
        </button>
        <Link
          href={type ? "/signup" : "/signin"}
          className="hover:underline hover:text-main transition-all duration-300 my-4"
        >
          {type ? "Create a new account" : "Already have an account"}
        </Link>
      </div>
    </div>
  );
}
