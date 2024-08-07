import classNames from "classnames";
import Image from "next/image";
import { DotProps } from "react-multi-carousel";

interface DotsGroup extends DotProps {
  image: string;
  id?: number;
}

const CustomDot = ({ onClick, active, image, index, id }: DotsGroup) => {
  return (
    <button
      title="dot"
      onClick={() => {
        onClick && onClick();
      }}
      className={classNames(
        "transition-all min-w-[50px] w-full aspect-square max-w-[80px] overflow-hidden lg:h-[80px] lg:shrink-0",
        active ? "opacity-100" : "opacity-40"
      )}
    >
      <Image
        src={image}
        alt="Product"
        width={120}
        height={120}
        className="p-2 aspect-square object-contain object-center border-2 border-primary rounded-2xl bg-gray-100 shadow-md"
      />
    </button>
  );
};

export default CustomDot;
