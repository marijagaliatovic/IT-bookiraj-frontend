'use client';

import React, { useEffect, useState } from "react";
import SlideShow from "@/app/components/SlideShow";
import BookNow from "@/app/components/BookNow";
import contentfulService, { imagesCollection } from "@/lib/.contentfulClient";
import NavBar from "./NavBar";

type ApartmentProps = {
  apartment: {
    title: string;
    location: string;
    price: number;
    apartmentId: string;
  };
};

const Apartment = ({ apartment }: ApartmentProps) => {
  const [openInformation, setOpenInformation] = useState(false);
  const [openAmenities, setOpenAmenities] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);
  const [allApartmentPhotos,setallApartmentPhotos] = useState<imagesCollection|undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{ const fetchData = async () => {
    console.log("apartmentId: " + apartment.apartmentId);
    try {
      const data = await contentfulService.getAllPhotos(apartment.apartmentId);
      setallApartmentPhotos(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally { //executes whether it succeeds or we get an error
      setLoading(false);
    }
  };
    fetchData();
  }, [])

  const toggleInformation = () => {
    setOpenInformation(!openInformation);
  };

  const toggleAmenities = () => {
    setOpenAmenities(!openAmenities);
  };

  const toggleReviews = () => {
    setOpenReviews(!openReviews);
  };

  return (
    <>
      <NavBar/>
      <div className="bg-white mb-20 pt-5 pb-10 mx-5 rounded-md mt-32 md:mx-auto w-1/2 px-10">
        <div className="mx-auto bg-white">
          <SlideShow images={allApartmentPhotos}/>
        </div>
        <div className="bg-white flex flex-row">
          <div className="bg-white">
            <div className="bg-white relative">
              <h2 className="font-bold text-xl bg-white lg:text-2xl ml-10">
                {apartment.title}
              </h2>
            </div>
            <h1 className="bg-white flex ml-10">
              {apartment.location} | Room | {apartment.price}$ per night
            </h1>
            <div className="bg-white ml-10 mb-10">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="bg-white ml-8 pl-8 pt-4">
            <BookNow />
          </div>
        </div>
        <hr />
        <button
          className="bg-white font-bold mt-5 ml-10 mb-5 flex flex-row"
          onClick={toggleInformation}
        >
          Information{" "}
          <svg
            height="26"
            viewBox="0 0 48 48"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            className={` bg-transparent ${openInformation ? "rotate-180" : "rotate-0"}`}
          >
            <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
        {openInformation && (
          <p className="bg-white mb-10 ml-10 pr-4">
            a
          </p>
        )}
        <hr />
        <button
          className="bg-white font-bold mt-5 ml-10 mb-5 flex flex-row"
          onClick={toggleAmenities}
        >
          What we offer{" "}
          <svg
            height="26"
            viewBox="0 0 48 48"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            className={` bg-transparent ${openAmenities ? "rotate-180" : "rotate-0"}`}
          >
            <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
        {openAmenities && (
          <div className="bg-white flex flex-row flex-wrap gap-4 ml-10 mb-10 overflow">
           a
          </div>
        )}
        <hr />
        <button
          className="bg-white font-bold mt-5 ml-10 mb-5 flex flex-row"
          onClick={toggleReviews}
        >
          Reviews{" "}
          <svg
            height="26"
            viewBox="0 0 48 48"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            className={` bg-transparent ${openReviews ? "rotate-180" : "rotate-0"}`}
          >
            <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Apartment;
function setallApartmentPhotos(data: import("@/lib/.contentfulClient").imagesCollection | undefined) {
  throw new Error("Function not implemented.");
}

