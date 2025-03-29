"use client";
import { logout } from "@/app/firebase/auth";

export default function LogoutButton() {
  return (
    <button
      onClick={logout}
      className="bg-red-500 text-[14px] px-4 py-2 rounded cursor-pointer"
    >
      Logout
    </button>
  );
}
