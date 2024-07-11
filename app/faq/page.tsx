"use client";

import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Faq() {
  const [openAnswer, setOpenAnswer] = useState(false);
  const [openAnswer2, setOpenAnswer2] = useState(false);
  const [openAnswer3, setOpenAnswer3] = useState(false);
  const [openAnswer4, setOpenAnswer4] = useState(false);
  const [openAnswer5, setOpenAnswer5] = useState(false);
  const [openAnswer6, setOpenAnswer6] = useState(false);
  const [openAnswer7, setOpenAnswer7] = useState(false);

  const toogleAnswer = () => {
    setOpenAnswer(!openAnswer);
  };

  const toogleAnswer2 = () => {
    setOpenAnswer2(!openAnswer2);
  };

  const toogleAnswer3 = () => {
    setOpenAnswer3(!openAnswer3);
  };

  const toogleAnswer4 = () => {
    setOpenAnswer4(!openAnswer4);
  };

  const toogleAnswer5 = () => {
    setOpenAnswer5(!openAnswer5);
  };

  const toogleAnswer6 = () => {
    setOpenAnswer6(!openAnswer6);
  };

  const toogleAnswer7 = () => {
    setOpenAnswer7(!openAnswer7);
  };


  return (
    <>
    <NavBar/>
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center relative lg:mt-12 py-8 w-full lg:max-content flex-grow">
        <h2 className="font-bold text-xl lg:text-2xl self-center lg:mt-10 top-24">
          Frequently asked questions
        </h2>
        <div className="small-line"></div>
      </div>

      <div className="bg-white mb-10 pb-10 mx-10 sm:mx-auto md:mx-auto max-w-md px-12 rounded-md shadow-lg sm:w-2/3 w-4/5">
        <button
          className="bg-white text-left font-bold mt-10 flex gap-3 flex-row"
          onClick={toogleAnswer}
        >
          What is the check-in/check-out time?{" "}
          <svg
            height="26"
            viewBox="0 0 48 48"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            className={` bg-transparent ${
              openAnswer ? "rotate-180" : "rotate-0"
            }`}
          >
            <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
        {openAnswer && (
          <p className="bg-white mt-5">
            Typically, check-in times range from 2:00 PM to 4:00 PM, and
            check-out times are around 10:00 AM to 12:00 PM. However, these
            times may vary depending on the property&apos;s policies.
          </p>
        )}
        <hr className="mt-10"></hr>
        <button
          className="bg-white text-left font-bold mt-10 flex gap-3 flex-row"
          onClick={toogleAnswer2}
        >
          What are the cancellation policies?{" "}
          <svg
            height="26"
            viewBox="0 0 48 48"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            className={` bg-transparent ${
              openAnswer2 ? "rotate-180" : "rotate-0"
            }`}
          >
            <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
        {openAnswer2 && (
          <p className="bg-white mt-5">
           Cancellation policies vary between apartments and booking platforms. Some may offer free cancellation up to a certain date, while others might impose penalties for late cancellations or no-shows. Before making a reservation, it&apos;s crucial to review and understand the specific cancellation terms..
          </p>
        )}
        <hr className="mt-10"></hr>
        <button
          className="bg-white text-left font-bold mt-10 flex flex-row"
          onClick={toogleAnswer3}
        >
          How do I handle maintenance issues during my stay{" "}
          <svg
            height="26"
            viewBox="0 0 48 48"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            className={` bg-transparent ${
              openAnswer ? "rotate-180" : "rotate-0"
            }`}
          >
            <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
        {openAnswer3 && (
          <p className="bg-white mt-5">
            Each apartment may have different procedures for addressing maintenance concerns. Typically, you can contact the property manager or maintenance team directly for urgent issues. It&apos;s helpful to have their contact details readily available for quick assistance.
          </p>
        )}
        <hr className="mt-10"></hr>
        <button
          className="bg-white text-left font-bold mt-10 flex flex-row"
          onClick={toogleAnswer4}
        >
          What amenities are included in the apartment?{" "}
          <svg
            height="26"
            viewBox="0 0 48 48"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            className={` bg-transparent ${
              openAnswer4 ? "rotate-180" : "rotate-0"
            }`}
          >
            <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
        {openAnswer4 && (
          <p className="bg-white mt-5">
            Amenities can vary widely, but common ones include a fully equipped
            kitchen, Wi-Fi, TV, air conditioning/heating, and access to laundry
            facilities. Some apartments may offer additional amenities like gym
            access, parking, or a pool.
          </p>
        )}        
      </div>

      <Footer />
      </div>
    </>
  );
}