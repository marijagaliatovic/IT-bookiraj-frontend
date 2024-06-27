// 'use client'

// import SlideShow from "@/app/components/SlideShow";
// import React from "react";
// import Link from "@/node_modules/next/link";
// import { useState } from "react";
// import Footer from "@/app/components/Footer";
// import DateRange from "@/app/components/DateSearch"
// import BookNow from "@/app/components/BookNow";
// import contentfulService from "@/lib/.contentfulClient";

// type Params = {
//   apartmentId: string;
// }

// const Apartment =  async ( { params }: {params: Params}) => {
//   console.log("ID apartmana:", params.apartmentId);
//   const apartment = await contentfulService.getApartmentById(params.apartmentId);

//   if(!apartment){
//     return <div>Apartment not found</div>
//   }

//   const [openInformation, setOpenInformation] = useState(false);
//   const [openAmeneties, setOpenAmeneties] = useState(false);
//   const [openReviews, setOpenReviews] = useState(false);

//   const toggleInformation = () => {
//     setOpenInformation(!openInformation);
//   };

//   const toogleAmenities = () => {
//     setOpenAmeneties(!openAmeneties)
//   }

//   const toogleReviews = () => {
//     setOpenReviews(!openReviews)
//   }



//   return (
//     <>
//       <div className="bg-white mb-20 pt-5 pb-10 mx-5 rounded-md mt-32 md:mx-auto w-1/2 px-10">
//         <div className="mx-auto bg-white">
//           <SlideShow />
//         </div>
//         <div className="bg-white flex flex-row">
//           <div className="bg-white">
//         <div className="bg-white relative">
//           <h2 className="font-bold text-xl bg-white lg:text-2xl ml-10">
//             Apartman
//           </h2>   
//         </div>
//         <h1 className="bg-white flex ml-10">
//            Spinut | Room | 500$ per night
//         </h1>
//         <div className="bg-white ml-10 mb-10">⭐⭐⭐⭐⭐</div>
//         </div>
//           <div className="bg-white ml-8 pl-8 pt-4">
//           <BookNow/>
//           </div>
//         </div>
//         <hr />
//           <button
//             className="bg-white font-bold mt-5 ml-10 mb-5 flex flex-row"
//             onClick={toggleInformation}>
//             Information{" "}
//           <svg
//             height="26"
//             viewBox="0 0 48 48"
//             width="26"
//             xmlns="http://www.w3.org/2000/svg"
//             className={` bg-transparent ${openInformation ? "rotate-180" : "rotate-0"}`}
//           >
//             <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
//             <path d="M0 0h48v48h-48z" fill="none" />
//           </svg>
//       </button>
//       {openInformation && (
//         <p className="bg-white mb-10 ml-10 pr-4">
//           Discover the perfect retreat for your next getaway at our exquisite
//           apartment. Nestled in the heart of the city, our thoughtfully
//           designed space offers a harmonious blend of modern comfort and
//           stylish elegance. Immerse yourself in the vibrant surroundings, as
//           our well-appointed apartment provides a haven of relaxation after a
//           day of exploring local attractions. With its contemporary amenities,
//           stunning views, and convenient location, this apartment is your
//           gateway to an unforgettable stay. Whether you&apos;re traveling for
//           business or leisure, make your reservation today and indulge in the
//           ultimate experience of comfort and convenience. Your home away from
//           home awaits at our exceptional apartment.
//         </p>
//       )}
//       <hr />
//       <button
//             className="bg-white font-bold mt-5 ml-10 mb-5 flex flex-row"
//             onClick={toogleAmenities}>
//             What we offer{" "}
//           <svg
//             height="26"
//             viewBox="0 0 48 48"
//             width="26"
//             xmlns="http://www.w3.org/2000/svg"
//             className={` bg-transparent ${openAmeneties ? "rotate-180" : "rotate-0"}`}
//           >
//             <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
//             <path d="M0 0h48v48h-48z" fill="none" />
//           </svg>
//       </button>
//       {openAmeneties && (
//         <div className="bg-white flex flex-row flex-wrap gap-4 ml-10 mb-10 overflow">
//           <p className="bg-slate-80 rounded-md p-2">-Kitchen</p>
//           <p className="bg-slate-80 rounded-md p-2">-Wifi</p>
//           <p className="bg-slate-80 rounded-md p-2">-Wifi</p>
//           <p className="bg-slate-80 rounded-md p-2">-Wifi</p>
//           <p className="bg-slate-80 rounded-md p-2">-Wifi</p>
//           <p className="bg-slate-80 rounded-md p-2">-Wifi</p>
//           <p className="bg-slate-80 rounded-md p-2">-Wifi</p>
//           <p className="bg-slate-80 rounded-md p-2">-Wifi</p>
//           <p className="bg-slate-80 rounded-md p-2">-Kitchen</p>
//           <p className="bg-slate-80 rounded-md p-2">-Kitchen</p>
//           <p className="bg-slate-80 rounded-md p-2">-Kitchen</p>
//           <p className="bg-slate-80 rounded-md p-2">-Kitchen</p>
//         </div>
//       )}
//       <hr />
//       <button
//             className="bg-white font-bold mt-5 ml-10 mb-5 flex flex-row"
//             onClick={toogleReviews}>
//             Reviews{" "}
//           <svg
//             height="26"
//             viewBox="0 0 48 48"
//             width="26"
//             xmlns="http://www.w3.org/2000/svg"
//             className={` bg-transparent ${openReviews ? "rotate-180" : "rotate-0"}`}
//           >
//             <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
//             <path d="M0 0h48v48h-48z" fill="none" />
//           </svg>
//       </button>
//     </div>
//     <Footer />
//     </>
//   );
// }

// export default Apartment;

import React from "react";
import Footer from "@/app/components/Footer";
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
    <div>
      <Apartment key={apartmentId} apartment={{
        title: apartment.title,
        location: apartment.location,
        price: apartment.priceNumber,
        apartmentId: apartment.apartmentId
      }} />
      <Footer />
    </div>
  );
};

export default ApartmentPage;
