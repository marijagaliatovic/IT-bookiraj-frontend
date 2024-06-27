"use client";
import AccomodationItem from "../components/AccomodationItem";
import contentfulService from "@/lib/.contentfulClient";
import DateSearch from "../components/DateSearch";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import { apartmentsItem } from "@/lib/.contentfulClient";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";


const ApartmentListings = () => {
  const [apartments, setApartments] = useState<apartmentsItem[]>([]);
  const [originalApartments, setOriginalApartments] = useState<
    apartmentsItem[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await contentfulService.getAllApartments();
        setApartments(data);
        setOriginalApartments(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        //executes whether it succeeds or we get an error
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const handleSetData = (newApartments: apartmentsItem[]) => {
    setApartments(newApartments);
  };
 
  return (
    <>
      <NavBar/>
      <div className="flex flex-col gap-20 min-h-screen">
        <div className="relative top-0 lg:top-24 flex flex-col w-full lg:max-content flex-grow">
          <div className="flex flex-col items-center flex-grow">
            <div className="flex lg:w-max w-max md:w-1/2 lg:flex-row flex-col justify-center items-center gap-2">
              <DateSearch />
              <Filter data={originalApartments} setData={handleSetData} />
            </div>
            {loading ? (
              <></>
            ) : apartments.length === 0 ? (
              <div className="lg:p-8 lg:mt-4 font-bold p-20 text-center">
                No apartments match the selected filters.
              </div>
            ) : (
              <div className="flex md:w-full flex-col lg:flex-row flex-wrap items-center justify-center w-max  lg:w-11/12 xl:w-4/5  relative lg:mx-20 lg:mt-4 lg:items-stretch">
                {/* {apartments.map((item) => (
                  <AccomodationItem key={} {...item} />
                ))} */}
                {apartments.map((item, index) => (
                      <AccomodationItem key={index} {...item} />
                    ))}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ApartmentListings;


