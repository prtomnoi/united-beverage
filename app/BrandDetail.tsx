import Image from "next/image";
import React from "react";

const BrandDetail = () => {
  return (
    <div className="pt-32 default-container grid grid-cols-1 xl:grid-cols-[repeat(2,1fr)_repeat(3,0)] xl:grid-rows-[repeat(3, 1fr)_repeat(2, 0)] justify-items-center">
      <Image
        alt="Detail"
        src="/banner-place-holder.png"
        width={600}
        height={700}
        className="w-full max-w-[600px] rounded-xl pic1"
      />
      <div className="text-secondary text-[15px] md:text-[17px] h-1/2 flex flex-col gap-4 py-8 text1">
        <p>
          United Beverage Thailand supplies imported beverages to cocktail bars,
          hotels, restaurants, wholesale shops, and retail businesses, offering
          a selection of wines and premium spirits from around the world.
        </p>
        <p>
          United Beverage Thailand has worked with many suppliers with a passion
          for fulfilling each client's requirements and maintaining the service
          standards of international bars, hotels, and restaurants.
        </p>
      </div>
      <div className="text-secondary text-[15px] md:text-[17px] h-1/2 flex flex-col gap-4 py-8 items-center text-center text2">
        <h1 className="text-[25px] md:text-[35px] text-primary font-bold">
          Our Mission{" "}
        </h1>
        <p>
          To be the leading for On-Trade and Off-Trade beverage partner of
          choices in Thailand.
        </p>
      </div>
      <Image
        alt="Detail"
        src="/banner-place-holder.png"
        width={600}
        height={700}
        className="w-full max-w-[600px] rounded-xl pic2"
      />
    </div>
  );
};

export default BrandDetail;
