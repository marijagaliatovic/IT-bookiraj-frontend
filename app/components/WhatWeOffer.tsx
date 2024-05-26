"use client";
import Image from "next/image";
import split from "@/public/images/split.jpg";

export default function WhatWeOffer() {
  return (
    <div className="flex flex-col w-full lg:flex-row relative justify-center h-min lg:mt-12">
      <Image src={split} width={900} height={200} alt="slika" />
      <div className="bg-white flex flex-col lg:grid lg:w-1/2 lg:grid-cols-1 lg:grid-rows-3 xl:grid-cols-2 xl:grid-rows-2">
        <div className="inline-grid">
          <p className="bg-slate-200 p-14 text-center font-serif font-medium not-italic tracking-wide">
            Explore our varied accommodations, from cozy rooms in Split&apos;s
            historic center to stunning sea-view apartments, catering to every
            traveler&apos;s preference.
          </p>
        </div>
        <div className="inline-grid">
          <p className="bg-slate-300 p-14 text-center font-serif font-medium not-italic tracking-wide">
            Experience the charm of Split&apos;s old town or the allure of its
            seaside views with our diverse location options.
          </p>
        </div>
        <div className="inline-grid lg:hidden xl:inline-grid">
          <p className="bg-slate-400 p-14 text-center font-serif font-medium not-italic tracking-wide">
            Elegant furnishings, fully equipped kitchens, and spacious terraces
            are just a glimpse of the exceptional amenities we provide for your
            perfect stay.
          </p>
        </div>
        <div className="inline-grid">
          <p className="bg-slate-500 p-14 text-center font-serif font-medium not-italic tracking-wide">
            Discover the best of the area with our personalized recommendations,
            enhancing your stay with exclusive local insights we offer.
          </p>
        </div>
      </div>
    </div>
  );
}
