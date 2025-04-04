"use client";
import { useAuth } from "@/Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import LogoutButton from "./LogOutButton";
import SignInButton from "./SignInButton";
type ProfileProps = {
  setBars: React.Dispatch<React.SetStateAction<boolean>>;
};
const Profile: React.FC<ProfileProps> = ({ setBars }) => {
  const authContext = useAuth();
  const user = authContext?.user;
  const [profileList, setProfileList] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) return;

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
        <SignInButton setBars={setBars} />
      )}
      {user && (
        <ul
          className={`flex items-center gap-4 md:flex-col md:gap-6 md:absolute md:top-[160%] md:right-[-180%] 
         md:w-[160px] md:bg-main md:text-center md:px-3 
        md:py-6 md:rounded-[8px] md:animate-list lg:w-[200px] lg:right-[-40%] ${
          profileList ? "md:flex" : "md:hidden"
        }`}
        >
          <li className="w-[80px] md:w-[140px] truncate">{user.displayName}</li>
          <li>
            <LogoutButton setProfileList={setProfileList} setBars={setBars} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
