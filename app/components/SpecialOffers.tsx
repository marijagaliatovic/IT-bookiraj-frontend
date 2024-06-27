"use client"
import Link from "@/node_modules/next/link";
import SpecialOfferItem from "./SpecialOfferItem";
import { apartmentsItem } from "@/lib/.contentfulClient";
import contentfulService from "@/lib/.contentfulClient";
import { useEffect, useState } from "react";

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
    <div className="bg-stone-200 flex flex-col items-center justify-center relative lg:mt-12 py-8">
      <h2 className="bg-stone-200 self-center font-bold not-italic text-xl lg:text-2xl mt-5 lg:mb-2">
        Special Offers
      </h2>
      <div className="small-line"></div>
      {/*lg*/}
      <div className="bg-stone-200 xl:hidden lg:flex lg:gap-10 hidden lg:flex-row justify-center lg:w-full lg:relative lg:mx-10 lg:mt-4 lg:items-strech">
        {offers.slice(1,3).map((offer, index) => (
          <SpecialOfferItem key={index} {...offer} />
        ))}
      </div>
      {/*md*/}
      <div className="bg-stone-200 md:w-4/5 hidden md:flex md:flex-row md:justify-center md:gap-6 lg:hidden ">
        {offers.slice(1,2).map((offer, index) => (
          <SpecialOfferItem key={index} {...offer} />
        ))}
      </div>
      {/*s*/}
      <div className="bg-stone-200 w-3/5 lg:hidden md:hidden justify-center ">
        {offers.slice(1,2).map((offer, index) => (
          <SpecialOfferItem key={index} {...offer} />
        ))}
      </div>
      {/*xl*/}
      <div className="bg-stone-200 lg:hidden md:hidden xl:flex xl:gap-10 hidden xl:flex-row justify-center xl:w-4/5 xl:relative xl:mx-20 xl:mt-4 xl:items-strech">
        {offers.slice(1,4).map((offer, index) => (
          <SpecialOfferItem key={index} {...offer} />
        ))}
      </div>
     
      <div className="bg-transparent mt-4 w-full lg:w-1/2 xl:w-2/3 flex justify-center lg:justify-end lg:mr-0 xl:mr-0 grow">
          <i className="bg-gray-400 text-center not-italic text-sm lg:text-md font-bold hover:bg-slate-600 hover:text-slate-200 rounded-md p-2 shadow-xl tracking-wide transition duration-300 ease-in-out"><Link href="/specialoffers" className="bg-transparent">View all</Link></i>
      </div>
    </div>
  );
}