import { brandsLogo } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const BrandsLogo = () => {
  return (
    <div className="default-container space-y-4 pt-20">
      <h1 className="text-center font-bold text-[25px] md:text-[30px] lg:text-[35px] text-primary">
        Brands
      </h1>
      <div className="flex flex-wrap gap-12 justify-center items-center">
        {brandsLogo.map(({ image, label, url }) => {
          if (url)
            return (
              <Link
                href={url}
                key={label}
                className="block hover:scale-110 transition-all"
                target="_blank"
              >
                <Image
                  alt={label}
                  src={image}
                  height={200}
                  width={200}
                  className="w-[80px] object-contain object-center"
                />
              </Link>
            );

          return (
            <Image
              key={label}
              alt={label}
              src={image}
              height={200}
              width={200}
              className="w-[60px] object-contain object-center"
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrandsLogo;
