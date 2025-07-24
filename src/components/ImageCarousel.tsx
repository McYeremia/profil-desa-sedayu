"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useEffect } from "react";

type Props = {
  images: string[];
};

export default function ImageCarousel({ images }: Props) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 10,
      },
    },
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div
      ref={sliderRef}
      className="keen-slider"
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        height: "250px",
        width: "100%",
      }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="keen-slider__slide"
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
          }}
        >
          <Image
            src={src}
            alt={`Image ${i + 1}`}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  );
}
