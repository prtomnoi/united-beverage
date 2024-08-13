import { brandsLogo, clientLogos } from "@/constants";
import Image from "next/image";

const ClientsLogo = () => {
  const { hotel, malls, online, retail } = clientLogos;

  return (
    <div className="default-container space-y-8 !mt-20 p-4 pb-8">
      <h1 className="text-center font-bold text-[25px] md:text-[30px] lg:text-[35px] text-primary">
        Clients
      </h1>
      <div className="bg-[#E5E5E3] rounded-2xl p-8 space-y-6">
        <h1 className="text-[20px] font-bold">{malls.label}</h1>
        <div className="flex gap-10 items-center justify-center flex-wrap">
          {malls.logo.map(({ image }) => (
            <Image
              key={image}
              src={image}
              alt="logo"
              width={300}
              height={300}
              className="w-[80px] h-auto object-contain object-center"
            />
          ))}
        </div>
      </div>
      <div className="bg-[#E5E5E3] rounded-2xl p-8 space-y-6">
        <h1 className="text-[20px] font-bold">{retail.label}</h1>
        {retail.logo.map(({ label, logo }) => (
          <div key={`retail-${label}`} className="py-4 space-y-6">
            <h1 className="text-[17px] font-semibold">{label}</h1>
            <div className="flex gap-10 items-center flex-wrap">
              {logo.map(({ image }) => (
                <Image
                  key={image}
                  src={image}
                  alt="logo"
                  width={300}
                  height={300}
                  className="w-[80px] h-auto object-contain object-center"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#E5E5E3] rounded-2xl p-8 space-y-6">
        <h1 className="text-[20px] font-bold">{online.label}</h1>
        <div className="flex gap-10 items-center flex-wrap">
          {online.logo.map(({ image }) => (
            <Image
              key={image}
              src={image}
              alt="logo"
              width={300}
              height={300}
              className="w-[80px] h-auto object-contain object-center"
            />
          ))}
        </div>
      </div>
      <div className="bg-[#E5E5E3] rounded-2xl p-8 space-y-6">
        <h1 className="text-[20px] font-bold">{hotel.label}</h1>
        <div className="flex flex-wrap justify-evenly gap-8 gap-x-20">
          {hotel.logo.map(({ label, logo }) => (
            <div key={`hotel-${label}`} className="py-4 space-y-6">
              <h1 className="text-[17px] font-semibold">{label}</h1>
              <div className="flex gap-10 items-center flex-wrap">
                {logo.map(({ image }) => (
                  <Image
                    key={image}
                    src={image}
                    alt="logo"
                    width={300}
                    height={300}
                    className="w-[80px] h-auto object-contain object-center"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsLogo;
