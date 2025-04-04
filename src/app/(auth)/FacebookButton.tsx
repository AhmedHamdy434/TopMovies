import { signInWithFaceBook } from "@/firebase/auth";
import { useRouter } from "next/navigation";
interface FacebookButtonProps {
  setError: (message: string) => void;
}

const FacebookButton: React.FC<FacebookButtonProps> = ({ setError }) => {
  const router = useRouter();
  const handleFacebook = async () => {
    const response = await signInWithFaceBook();
    if (response.success) router.push("/");
    else setError(response.message || "Facebook Sign-in failed.");
  };
  return (
    <button
      onClick={handleFacebook}
      className="mt-4 w-full bg-blue-500 p-2 rounded"
    >
      Sign in with Facebook
    </button>
  );
};

export default FacebookButton;
