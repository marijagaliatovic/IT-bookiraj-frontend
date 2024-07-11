import React from "react";
import SlideShow from "@/app/components/SlideShow";
import Footer from "@/app/components/Footer";
import DateRange from "@/app/components/DateSearch";
import BookNow from "@/app/components/BookNow";
import contentfulService from "@/lib/.contentfulClient";
import Apartment from "@/app/components/Apartment";

type Params = {
  params: {
    apartmentId: string;
  };
};

const ApartmentPage = async ({ params }: Params) => {
  const { apartmentId } = params;
  const apartment = await contentfulService.getApartmentById(apartmentId);

  if (!apartment) {
    return <div>Apartment not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full lg:max-content flex-grow">
      <Apartment key={apartmentId} apartment={{
        title: apartment.title,
        location: apartment.location,
        information: apartment.information,
        whatWeOffer: apartment.whatWeOffer,
        priceNumber: apartment.priceNumber,
        apartmentId: apartment.apartmentId,
        picture: apartment.picture,
        size: apartment.size,
        specialOffer: apartment.specialOffer,
        apartment: apartment.apartment,
        imagesCollection: apartment.imagesCollection
      }} />
      </div>
      <Footer />
    </div>
  );
};

export default ApartmentPage;