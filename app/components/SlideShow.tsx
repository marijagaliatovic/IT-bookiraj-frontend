"use client"
import React, { useState } from "react";
import Image from "next/image";

import image1 from "@/public/images/slika_sobe_1.jpg";
import image2 from "@/public/images/slika_sobe_2.jpg";
import image3 from "@/public/images/slika_sobe_3.jpg";


const SlideShow = () => {
  const images = [image1,image2,image3];

  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % images.length);
  };

  return (
    <div className="bg-white relative w-full basis-6/12 p-0 lg:p-8 lg:m-4">
            {images.map((image, index) => (
            <Image
                key={index}
                className={index === slideIndex ? "block" : "hidden"}
                src={image}
                width={800}
                priority
                placeholder="blur"
                alt={`Slide ${index + 1}`}
            />
            ))}
            <div>
                <i onClick={prevSlide} className="cursor-pointer absolute top-1/2 left-0 lg:left-8 transform -translate-y-1/2 w-auto p-4 lg:p-4
                text-white font-bold text-lg duration-300 ease-out select-none hover:bg-black hover:bg-opacity-80 self-center ">&#10094;</i>
                <i onClick={nextSlide} className="cursor-pointer absolute top-1/2 right-0 lg:right-8 transform -translate-y-1/2 w-auto p-4 lg:p-4
                text-white font-bold text-lg duration-300 ease-out select-none hover:bg-black hover:bg-opacity-80 self-center">&#10095;</i>
            </div>
        </div>
  );
};


export default SlideShow;
