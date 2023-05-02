import { useUser, RedirectToSignIn, UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import theme from "../styles/styles";

const Navbar = () => {
  return (
    <nav
      className={`${theme.p.x.sm} ${theme.bg.navbarBackground} ${theme.h.navbar} fixed top-0 z-20 flex w-full items-center`}
    ></nav>
  );
};

export default Navbar;
