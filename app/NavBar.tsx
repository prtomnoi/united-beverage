import Image from "next/image";
import React from "react";
import NavMenu from "./NavMenu";
import SideMenu from "./SideMenu";

const NavBar = () => {
  return (
    <div className="px-2 md:px-4 py-4">
      <div className="default-container flex justify-between items-center">
        <Image
          alt="Logo"
          src="/logo.png"
          width={263}
          height={58}
          className="w-1/2 max-w-[263px]"
        />

        <div className="items-center justify-center gap-6 hidden md:flex">
          <NavMenu />
        </div>
        <div className="block md:hidden">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
