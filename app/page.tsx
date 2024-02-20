import HeroSection from "./components/HeroSection";
import WhatWeOffer from "./components/WhatWeOffer";
import SpecialOffers from "./components/SpecialOffers";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";


export default function Home() {

  return (
    <div className=" relative top-0 lg:top-24 flex flex-col overflow-hidden">
      <HeroSection/>
      <WhatWeOffer/>
      <SpecialOffers/>
      <Reviews/>
      <Footer/>
    </div>
  )
}
