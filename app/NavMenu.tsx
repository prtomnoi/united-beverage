import { navMenu } from "@/constants";
import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <>
      {navMenu.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          className="font-semibold text-main-black hover:text-primary transition-all"
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default NavMenu;
