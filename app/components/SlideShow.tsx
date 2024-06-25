"use client"
import React, { useState } from "react";
import Image from "next/image";
import { imagesCollection } from "@/lib/.contentfulClient";

interface slideShowProps {
  images: imagesCollection;
}

export default function SlideShow({ images }: slideShowProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  console.log("images.items.length: ", images.items.length);
  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + images.items.length) % images.items.length);
  };

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % images.items.length);
  };

  return (
    <div className="bg-white relative w-full basis-6/12 p-0 lg:p-8 lg:m-4">
      {images.items.map((image, index) => (
        <Image
          key={index}
          className={index === slideIndex ? "block" : "hidden"}
          src={image.url}
          width={900}
          height={600}
          //placeholder="blur"
          //blurDataURL=""
          alt={`Slide ${index + 1}`}
        />
      ))}
      <div>
        <i onClick={prevSlide} className="cursor-pointer absolute top-1/2 left-0 lg:left-8 transform -translate-y-1/2 w-auto p-4 lg:p-4 text-white font-bold text-lg duration-300 ease-out select-none hover:bg-black hover:bg-opacity-80 self-center">
          &#10094;
        </i>
        <i onClick={nextSlide} className="cursor-pointer absolute top-1/2 right-0 lg:right-8 transform -translate-y-1/2 w-auto p-4 lg:p-4 text-white font-bold text-lg duration-300 ease-out select-none hover:bg-black hover:bg-opacity-80 self-center">
          &#10095;
        </i>
      </div>
    </div>
  );
}
