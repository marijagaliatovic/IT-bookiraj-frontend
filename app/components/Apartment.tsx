"use client"

import React, { useState, useEffect } from "react";
import SlideShow from "@/app/components/SlideShow";
import BookNow from "@/app/components/BookNow";
import ReviewItem from "./ReviewItem";
import contentfulService, { apartmentsItem, imagesCollection } from "@/lib/.contentfulClient";
import getReviews, { reviewsItem } from "@/lib/.contentfulAllReviews";

type ApartmentProps = {
  apartment: apartmentsItem;
};

const Apartment = ({ apartment }: ApartmentProps) => {
  const [openInformation, setOpenInformation] = useState(false);
  const [openAmenities, setOpenAmenities] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);
  const [reviews, setReviews] = useState<reviewsItem[]>([]);
  const [allApartmentPhotos, setAllApartmentPhotos] = useState<imagesCollection | undefined>();
  const [loading, setLoading] = useState(true);
  const [loadingReviews, setLoadingReviews] = useState(true);

  const { title, location, priceNumber, information, whatWeOffer } = apartment;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews.getReviewsByApartment(apartment.title);
        console.log('Fetched Reviews:', data); // Debug statement
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoadingReviews(false);
      }
    };
    fetchReviews();
  }, [apartment.title]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await contentfulService.getAllPhotos(apartment.apartmentId);
        console.log('Fetched Photos:', data); // Debug statement
        setAllApartmentPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apartment.apartmentId]);

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
    <div className=" flex justify-center">
      <div className="bg-white mb-10 md:mb-10 pt-5 pb-10 mx-4 rounded-md lg:mt-32  lg:w-1/2  px-4 md:px-10 sm:mb-0">
        <div className="mx-auto bg-white md:mb-10 mb-5 lg:mb-4">
          <SlideShow images={allApartmentPhotos} />
        </div>
        <div className="bg-white justify-center flex flex-wrap flex-col gap-4 mb-10 md:flex-row md:justify-between items-center md:items-start">
          <div className="bg-white md:ml-10 md:mb-0 md:w-1/3">
            <div className="bg-white relative">
              <h2 className="font-bold text-xl bg-white lg:text-2xl">
                {title}
              </h2>
            </div>
            <h1 className="bg-white">
              {location} | Room | {priceNumber}$ per night
            </h1>
          </div>
          <div className="bg-white md:mr-10 lg:ml-8 md:ml-8 md:mt-0">
            <BookNow />
          </div>
        </div>
        <hr />
        <button
          className="bg-white font-bold ml-4 md:ml-10 mt-4 md:mt-4 mb-4 flex items-center"
          onClick={toggleInformation}
        >
          Information{" "}
          <svg
            height="26"
            viewBox="0 0 48 48"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            className={`bg-transparent ${openInformation ? "rotate-180" : "rotate-0"}`}
          >
            <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
        {openInformation && (
          <p className="bg-white mb-4 ml-4 md:ml-10 text-sm pr-4">
            {information}
          </p>
        )}
        <hr />
        <button
          className="bg-white font-bold mt-4 ml-4 md:ml-10 mb-4 flex items-center"
          onClick={toggleAmenities}
        >
          What we offer{" "}
          <svg
            height="26"
            viewBox="0 0 48 48"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            className={`bg-transparent ${openAmenities ? "rotate-180" : "rotate-0"}`}
          >
            <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
        {openAmenities && (
          <div className="bg-white flex flex-wrap gap-3 md:ml-10 mb-4 md:mb-10">
            {whatWeOffer.map((offer, index) => (
              <div key={index} className="bg-white p-2 border text-sm rounded">
                {offer}
              </div>
            ))}
          </div>
        )}
        <hr />
        <button
          className="bg-white font-bold mt-4 ml-4 md:ml-10 mb-4 flex items-center"
          onClick={toggleReviews}
        >
          Reviews{" "}
          <svg
            height="26"
            viewBox="0 0 48 48"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            className={`bg-transparent ${openReviews ? "rotate-180" : "rotate-0"}`}
          >
            <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
        {openReviews && (
          <div className="bg-white flex flex-col items-center mb-10 overflow">
            {loadingReviews ? (
              <p className="bg-white">Loading reviews...</p>
            ) : reviews.length > 0 ? (
              reviews.map((review) => (
                <ReviewItem key={review.name} {...review} />
              ))
            ) : (
              <p className="bg-white">No reviews available.</p>
            )}
          </div>
        )}
      </div>
      <div className="bg-white">
      </div>
    </div>
  );
};

export default Apartment;