import { useUser, RedirectToSignIn, UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import theme from "../styles/styles";

import { travelPinGlobeLogo } from "../assets";

const Navbar = () => {
  const { route } = useRouter();

  return (
    <nav
      className={`${theme.p.x.sm} ${theme.bg.navbarBackground} ${theme.h.navbar} fixed top-0 z-20 flex w-full items-center`}
    >
      <div
        className={`flex flex-row items-center justify-between gap-3 md:gap-0`}
      >
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={travelPinGlobeLogo}
            className="hidden cursor-pointer md:block"
            width={140}
            height={140}
            alt="logo"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
