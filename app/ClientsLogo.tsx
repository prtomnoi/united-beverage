import { brandsLogo } from "@/constants";
import Image from "next/image";

const ClientsLogo = () => {
  return (
    <div className="default-container space-y-4 !mt-20 p-4 pb-8 bg-main-black rounded-2xl">
      <h1 className="text-center font-bold text-[25px] md:text-[30px] lg:text-[35px] text-primary">
        Clients
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

export default ClientsLogo;
