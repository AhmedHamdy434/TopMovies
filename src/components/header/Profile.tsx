"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LogoutButton from "../LogOutButton";
type ProfileProps = {
  setBars: React.Dispatch<React.SetStateAction<boolean>>;
};
const Profile: React.FC<ProfileProps> = ({ setBars }) => {
  const authContext = useAuth();
  const user = authContext?.user;
  const userExtraInfo = authContext?.userExtraInfo;

  const router = useRouter();
  console.log(user);

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
          className="px-[14px] py-[6px] rounded-[5px] cursor-pointer bg-[var(--background)]"
          onClick={() => {
            router.push("/signin");
            setBars(false);
          }}
        >
          Sign In
        </button>
      )}
      {user && (
        <ul
          className={`flex items-center gap-4 md:flex-col md:gap-6 md:absolute md:top-[160%] md:right-[-180%] 
         md:w-[160px] md:bg-main md:text-center md:px-3 
        md:py-6 md:rounded-[8px] md:animate-list lg:w-[200px] lg:right-[-40%] ${
          profileList ? "md:flex" : "md:hidden"
        }`}
        >
          <li className="w-[80px] md:w-[140px] truncate">
            {userExtraInfo?.userName}
          </li>
          <li>
            <LogoutButton setBars={setBars} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
