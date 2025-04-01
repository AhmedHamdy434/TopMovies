"use client";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <div className="w-[24px] h-[32px] ml-4"></div>;
  return (
    <FontAwesomeIcon
      icon={faMoon}
      className={`${
        resolvedTheme === "dark"
      }? text-black:text-white cursor-pointer ml-4`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      size="2xl"
    />
  );
};

export default ThemeToggle;
