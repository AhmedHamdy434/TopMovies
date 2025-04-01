"use client";
import Link from "next/link";
import TopList from "./TopList";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [bars, setBars] = useState<boolean>(false);
  const [top, setTop] = useState<boolean>(false);
  return (
    <>
      <div className="md:hidden">
        {bars ? (
          <FontAwesomeIcon
            icon={faXmark}
            size="2xl"
            className="cursor-pointer md:hidden"
            onClick={() => setBars(!bars)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className="cursor-pointer hidden"
            onClick={() => setBars(!bars)}
          />
        )}
      </div>
      <nav
        className={`${
          bars
            ? "bg-main text-center text-3xl absolute top-[100%] left-0 w-[100%] flex flex-col gap-4 "
            : "hidden"
        } md:relative md:flex md:gap-[54px] md:flex-row md:text-[18px] md:top-0 md:w-fit md:text-left lg:text-[22px] lg:gap-[80px]`}
      >
        <Link
          href="/"
          onClick={() => setBars(false)}
          className="justify-center items-center"
        >
          Home
        </Link>
        <div className="relative md:flex md:justify-center md:items-center">
          <div className="top cursor-pointer pr-4" onClick={() => setTop(!top)}>
            Top
            <FontAwesomeIcon
              icon={faChevronDown}
              className="absolute right-[5%] md:left-[120%] md:top-[28%] lg:top-[26%]"
            />
          </div>
          {top && <TopList setTop={setTop} setBars={setBars} />}
        </div>
        <Link
          href="/favourites"
          onClick={() => setBars(false)}
          className="justify-center items-center"
        >
          Favourites
        </Link>
        <div className="profile flex text-[16px] justify-between items-center px-[40px] mt-4 mb-8 md:justify-end md:px-0 md:my-0 md:gap-4">
          <Profile setBars={setBars} />
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
