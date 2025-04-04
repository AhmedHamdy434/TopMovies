import { useRouter } from "next/navigation";
interface SignInButtonProps {
  setBars?: (bars: boolean) => void;
}
const SignInButton: React.FC<SignInButtonProps> = ({ setBars }) => {
  const router = useRouter();

  return (
    <button
      className="px-[14px] py-[6px] rounded-[5px] cursor-pointer bg-[var(--background)]"
      onClick={() => {
        router.push("/signin");
        if (setBars) setBars(false);
      }}
    >
      Sign In
    </button>
  );
};

export default SignInButton;
