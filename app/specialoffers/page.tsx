"use client"
import { apartmentsItem } from "@/lib/.contentfulClient";
import contentfulService from "@/lib/.contentfulClient";
import { useEffect, useState } from "react";
import SpecialOfferItem from "../components/SpecialOfferItem";
import Footer from "../components/Footer";

export default function SpecialOffers() {

  const [offers, setOffers] = useState<apartmentsItem[]>([]);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const data = await contentfulService.getAllSpecialoffers();
        setOffers(data);
        console.log(offers);
      } catch (error) {
        console.error("Error fetching specialOffers:", error);
      }
    }; 

    fetchData();
  },[]);

 
  return (
    <>
    <div className="bg-transparent flex flex-col items-center relative mt-0 lg:mt-12 lg:py-8 pb-4 ">
      <h2 className="bg-transparent self-center font-bold not-italic text-xl lg:text-2xl mb-2 mt-4 lg:mt-10 ">
        Special Offers
      </h2>
      <div className="small-line"></div>
      <div className="bg-transparent flex flex-col md:w-5/6 lg:flex-row flex-wrap items-center justify-center w-max lg:w-4/5 relative lg:mx-20 lg:mt-4 lg:items-stretch">
        {offers.map((offer, index) => (
          <SpecialOfferItem key={index} {...offer} />
        ))}
      </div>
      
    </div>
    <Footer/>
    </>
  );
}
