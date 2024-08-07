import Image from "next/image";
import React from "react";
import ProductsSlide from "./ProductsSlide";

const Header = () => {
  return (
    <div className="default-container gap-8 flex flex-col items-center lg:flex-row">
      <div className="space-y-3 basis-[40%] flex-1">
        <Image
          alt="logo"
          src="/logo-stack.svg"
          width={77}
          height={55}
          className="object-contain object-center w-full h-auto max-w-[212px]"
        />
        <h1 className="font-bold text-main-black text-[20px] md:text-[30px] lg:text-[35px]">
          United Beverage
        </h1>
        <p className="text-[15px] md:text-[20px]">
          Established in 2018 to target the alcohol market, We help source new
          and better products for its customers. As a new player in the market,
          United Beverage derives its expertise from the founder and team, who
          have over 30 years of experience in sales and marketing consulting. It
          is a master distributor and importer of alcoholic beverages.
        </p>
      </div>
      <ProductsSlide />
    </div>
  );
};

export default Header;
