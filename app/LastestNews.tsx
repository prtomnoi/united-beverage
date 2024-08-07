import { latestNews } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const LastestNews = () => {
  return (
    <div className="pt-20 default-container">
      <h1 className="text-center font-bold text-[25px] md:text-[30px] lg:text-[35px] text-primary">
        Lastest News
      </h1>
      <div className="flex flex-wrap justify-center gap-4  md:gap-8 lg:gap-20 mt-8">
        {latestNews.map(({ desc, href, id, image, title }) => (
          <Link key={id} href={href} className="block w-full max-w-[390px]">
            <Image
              src={image}
              alt={title}
              width={1920}
              height={1080}
              className="w-full aspect-video object-cover object-center"
            />
            <h1 className="text-primary text-[15px] md:text-[20px] font-bold mt-2">
              {title}
            </h1>
            <p className="text-main-black">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LastestNews;
