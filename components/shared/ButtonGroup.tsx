"use client";
import { useRef } from "react";
import { ButtonGroupProps } from "react-multi-carousel";
import { useDraggable } from "react-use-draggable-scroll";
import CustomDot from "./CustomDot";

interface Props extends ButtonGroupProps {
  product: { image: string; id: string }[];
}

const ButtonGroup = ({ product, carouselState, goToSlide }: Props) => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });

  return (
    <div
      className="flex gap-4 scrollbar-hide overflow-x-scroll px-4 mt-6"
      ref={ref}
      {...events}
    >
      {product.map(({ id, image }, index) => (
        <CustomDot
          key={id}
          active={carouselState?.currentSlide === index}
          onClick={() => goToSlide && goToSlide(index)}
          image={image}
          index={index}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
