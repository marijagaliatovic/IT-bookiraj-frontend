"use client";
import Footer from "../components/Footer";
import ReviewItem from "../components/ReviewItem";
import getAllReviews from "@/lib/contentfulUtils";
import { useEffect, useState } from "react";
import getReviews, { reviewsItem } from "@/lib/contentfulAllReviews";

const Reviews = () => {
  const [reviews, setReviews] = useState<reviewsItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews.getAllReviews();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center relative lg:mt-12 py-8 w-full lg:max-content flex-grow">
        <h2 className="font-bold text-xl lg:text-2xl self-center mt-10 top-24">Reviews</h2>
        <div className="small-line"></div>
        <div className="flex flex-wrap justify-center items-center mt-4 gap-4 px-4">
          {reviews.map((item, index) => (
            <div key={index} className="w-full lg:w-1/3 flex justify-center">
              <ReviewItem {...item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;