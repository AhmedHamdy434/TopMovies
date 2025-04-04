import { signInWithGoogle } from "@/firebase/auth";
import { useRouter } from "next/navigation";
interface GoogleButtonProps {
  setError: (message: string) => void;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ setError }) => {
  const router = useRouter();

  const handleGoogle = async () => {
    const response = await signInWithGoogle();
    if (response.success) router.push("/");
    else setError(response.message || "Google Sign-in failed");
  };
  return (
    <button
      onClick={handleGoogle}
      className="mt-4 w-full bg-red-500 p-2 rounded"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleButton;
