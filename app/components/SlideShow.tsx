"use client";
import React, { useState } from "react";
import Image from "next/image";
import { imagesCollection } from "@/lib/.contentfulClient";

interface SlideShowProps {
  images: imagesCollection | undefined;
}

export default function SlideShow({ images }: SlideShowProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    if (images) {
      setSlideIndex((slideIndex - 1 + images.items.length) % images.items.length);
    }
  };

  const nextSlide = () => {
    if (images) {
      setSlideIndex((slideIndex + 1) % images.items.length);
    }
  };

  return images ? (
    <div className="bg-white relative w-full basis-6/12 p-0 lg:p-8 lg:m-4">
      {images.items.map((image, index) => (
        <Image
          key={index}
          className={index === slideIndex ? "block" : "hidden"}
          src={image.url}
          width={900}
          height={600}
          alt={`Slide ${index + 1}`}
        />
      ))}
      <div>
        <i
          onClick={prevSlide}
          className="cursor-pointer absolute top-1/2 left-0 lg:left-8 transform -translate-y-1/2 w-auto p-4 lg:p-4 text-white font-bold text-lg duration-300 ease-out select-none hover:bg-black hover:bg-opacity-80 self-center"
        >
          &#10094;
        </i>
        <i
          onClick={nextSlide}
          className="cursor-pointer absolute top-1/2 right-0 lg:right-8 transform -translate-y-1/2 w-auto p-4 lg:p-4 text-white font-bold text-lg duration-300 ease-out select-none hover:bg-black hover:bg-opacity-80 self-center"
        >
          &#10095;
        </i>
      </div>
    </div>
  ) : (
    <div className="bg-white relative w-full basis-6/12 p-0 lg:p-8 lg:m-4 h-max "></div>
  );
}