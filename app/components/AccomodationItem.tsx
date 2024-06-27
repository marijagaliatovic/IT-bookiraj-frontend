"use client";

import Image from "next/image";
import Link from "@/node_modules/next/link";

export interface images {
  title: string;
  url: string;
}

export interface imagesCollection {
  items: images[];
}

export interface accomodation {
  apartmentId: string;
  picture: {
    title: string;
    url: string;
  };
  title: string;
  location: string;
  size: string;
  priceNumber: number;
  apartment: boolean;
  specialOffer: number;
  imagesCollection: imagesCollection;
}

const AccomodationItem = (item: accomodation) => {
  return (
    <div className="top-0 w-full lg:w-1/4 rounded-md md:w-1/2  bg-white flex flex-col justify-around items-center lg:m-4 my-4 hover:shadow-2xl">
      <div className="bg-white relative mt-6 lg:w-4/5 w-3/4  md:h-44 h-36 lg:h-44">
        <Image fill={true} src={item.picture.url} alt={item.picture.title} />
      </div>
      <div className="bg-white relative basis-6/12 w-8/12 m-4 flex flex-col justify-between gap-1 text-center ">
        <h3 key={item.apartmentId} className="bg-white self-center text-2xl font-bold mb-4 cursor-pointer font-serif not-italic tracking-widest">
          <Link href={`/apartmentlistings/` + item.apartmentId}>{item.title}</Link>
        </h3>
        <div className="flex flex-col self-center justify-center m-3">
          <div className="bg-white flex justify-center gap-1 items-end">
            <p className="bg-white font-serif font-medium not-italic tracking-wide">
              {item.location}
            </p>
          </div>
          <div className="flex flex-col text-center bg-white">
            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">
              {item.size}
            </p>
            <p
              className={` bg-white self-center font-serif font-medium not-italic tracking-wide ${
                item.specialOffer !== 0 ? "line-through" : ""
              }`}
            >
              {item.priceNumber}€ per night
            </p>
            {item.specialOffer !== 0 ? (
              <p className="bg-white self-center font-serif font-bold not-italic tracking-wide">
                {item.specialOffer}€ per night
              </p>
            ) : (
              <> </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccomodationItem;
