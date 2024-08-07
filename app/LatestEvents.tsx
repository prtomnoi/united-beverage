import { latestEvents } from "@/constants";
import classNames from "classnames";
import Image from "next/image";

const LatestEvents = () => {
  return (
    <div className="default-container space-y-10 pt-20">
      <h1 className="text-center font-bold text-[25px] md:text-[30px] lg:text-[35px] text-primary pb-10">
        Latest Events
      </h1>
      {latestEvents.map(({ images, title }, index) => (
        <div
          key={title}
          className={classNames(
            "w-full flex gap-4 md:gap-8 lg:gap-10 items-center",
            index % 2 === 0 ? "flex-row-reverse" : "flex-row text-right"
          )}
        >
          <h1 className="font-bold text-[17px] lg:text-[25px] text-primary flex-auto">
            {title}
          </h1>
          <div
            className={classNames(
              "gap-3 grid-cols-2 w-full max-w-[500px]",
              images.length === 1 ? "flex" : "grid"
            )}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                alt="events"
                src={image}
                width={1920}
                height={1080}
                className={classNames(
                  "object-cover object-center w-full h-full rounded-3xl aspect-[2/1.5] ",
                  (index + 1) % 3 === 0 && "col-span-2",
                  images.length === 1 ? "max-h-[500px]" : "max-h-[200px]"
                )}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestEvents;
