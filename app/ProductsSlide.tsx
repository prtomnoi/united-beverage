"use client";
import Carousel from "react-multi-carousel";
import { ProductSlide } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@/components/shared";

const responsive = {
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const ProductsSlide = () => {
  return (
    <div className="w-full max-w-[480px] relative">
      <Carousel
        responsive={responsive}
        containerClass="w-full max-w-[480px]"
        customButtonGroup={<ButtonGroup product={ProductSlide} />}
        renderButtonGroupOutside
        itemClass="w-full"
        arrows={false}
        draggable={false}
      >
        {ProductSlide.map(({ href, id, image }) => (
          <Link
            href={href}
            target="_blank"
            key={id}
            className="block w-full select-none"
          >
            <Image
              alt="product"
              src={image}
              width={480}
              height={410}
              className="object-contain object-center w-full max-w-[480px] max-h-[410px] select-none"
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductsSlide;
