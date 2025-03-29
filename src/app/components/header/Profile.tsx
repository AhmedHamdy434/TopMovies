"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../../Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LogoutButton from "../LogOutButton";
const Profile = () => {
  const authContext = useAuth();
  const user = authContext?.user;
  const router = useRouter();
  const [profileList, setProfileList] = useState<boolean>(false);
  return (
    <div className="flex gap-4 items-center relative">
      {user ? (
        <FontAwesomeIcon
          icon={faUser}
          size="2xl"
          className="cursor-pointer"
          onClick={() => setProfileList(!profileList)}
        />
      ) : (
        <button
          className="px-[14px] py-[6px] border-0 rounded-[5px] cursor-pointer bg-background"
          onClick={() => router.push("/signin")}
        >
          Sign In
        </button>
      )}
      {profileList && user && (
        <ul className="flex items-center gap-4 md:absolute md:top-[160%] md:right-[-180%] lg:right-[-40%] md:w-[160px] md:bg-main md:flex-col lg:w-[200px] md:text-center md:px-3 md:py-6 md:rounded-[8px] md:gap-6 md:animate-list">
          <li className="w-[140px] truncate">{user.email}</li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
