"use client";
import { logout } from "@/firebase/auth";
import { useRouter } from "next/navigation";
type ProfileProps = {
  setBars: React.Dispatch<React.SetStateAction<boolean>>;
  setProfileList: React.Dispatch<React.SetStateAction<boolean>>;
};
const LogoutButton: React.FC<ProfileProps> = ({ setBars, setProfileList }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        setBars(false);
        setProfileList(false);
        logout();
        router.refresh();
      }}
      className="bg-red-500 text-[14px] px-4 py-2 rounded cursor-pointer"
    >
      Logout
    </button>
  );
};
export default LogoutButton;
