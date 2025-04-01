"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../Providers/AuthProvider";
import Sign from "@/app/(auth)/Sign";
import { useEffect } from "react";

export default function SignUp() {
  const authContext = useAuth();
  const user = authContext?.user;
  const router = useRouter();
  useEffect(() => {
    if (user) router.push("/");
  });
  return <Sign type={false} />;
}
