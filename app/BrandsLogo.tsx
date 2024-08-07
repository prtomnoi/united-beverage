import { brandsLogo } from "@/constants";
import Image from "next/image";

const BrandsLogo = () => {
  return (
    <div className="default-container space-y-4 pt-20">
      <h1 className="text-center font-bold text-[25px] md:text-[30px] lg:text-[35px] text-primary">
        Brands
      </h1>
      <div className="flex flex-wrap gap-12 justify-center items-center">
        {brandsLogo.map(({ image, label }) => (
          <Image
            key={label}
            alt={label}
            src={image}
            height={200}
            width={200}
            className="w-[80px] object-contain object-center"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandsLogo;
