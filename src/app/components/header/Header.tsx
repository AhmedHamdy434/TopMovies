import NavBar from "./NavBar";
import Image from "next/image";

import Logo from "../../../../public/reshot-icon-movies-YHCSARN6B4.svg";
import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-main relative select-none z-4">
      <div className="container flex justify-between items-center min-h-[80px]">
        <div className="logo flex items-center gap-3">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={60}
              priority
              className="relative bottom-1.5"
            ></Image>
          </Link>
          <h1 className="text-[32px] font-bold">Best</h1>
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
