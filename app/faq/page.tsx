"use client";

import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";

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
      <div className="flex flex-col items-center relative lg:mt-12 py-8">
        <h2 className="font-bold text-xl lg:text-2xl self-center lg:mt-10 top-24">
          Frequently asked questions
        </h2>
        <div className="small-line"></div>
      </div>

      <div className="bg-white mb-20 pt-5 pb-10 sm:mx-auto md:mx-auto max-w-md px-10 rounded-md shadow-lg mt-5 lg:max-content">
        <button
          className="bg-white text-left font-bold mt-10 flex flex-row"
          onClick={toogleAnswer}
        >
          What is the check-in/check-out time for the apartment?{" "}
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
          className="bg-white text-left font-bold mt-10 flex flex-row"
          onClick={toogleAnswer2}
        >
          Is there a security deposit required when booking an apartment?{" "}
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
            Many apartments require a security deposit to cover any damages or
            incidents during your stay. The amount varies depending on the
            property and is usually refunded after check-out if no damage is
            found.
          </p>
        )}
        <hr className="mt-10"></hr>
        <button
          className="bg-white text-left font-bold mt-10 flex flex-row"
          onClick={toogleAnswer3}
        >
          Are utilities such as electricity, water, and internet included in the
          rental price?{" "}
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
            This varies between apartments. Some include utilities in the rental
            price, while others may charge them separately. It&apos;s essential to
            clarify this with the property owner or manager before booking.
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
        <hr className="mt-10"></hr>
        <button
          className="bg-white text-left font-bold mt-10 flex flex-row"
          onClick={toogleAnswer5}
        >
          Is there a minimum stay requirement for booking an apartment?{" "}
          <svg
            height="26"
            viewBox="0 0 48 48"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            className={` bg-transparent ${
              openAnswer5 ? "rotate-180" : "rotate-0"
            }`}
          >
            <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
        {openAnswer5 && (
          <p className="bg-white mt-5">
            Many apartments have a minimum stay requirement, which can range
            from one night to a week or more. It&apos;s essential to check the
            property&apos;s booking terms and conditions for this information.
          </p>
        )}
        <hr className="mt-10"></hr>
        <button
          className="bg-white text-left font-bold mt-10 flex flex-row"
          onClick={toogleAnswer6}
        >
          Can I cancel or modify my reservation, and what are the associated
          fees?{" "}
          <svg
            height="26"
            viewBox="0 0 48 48"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            className={` bg-transparent ${
              openAnswer6 ? "rotate-180" : "rotate-0"
            }`}
          >
            <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
        {openAnswer6 && (
          <p className="bg-white mt-5">
            The cancellation and modification policies vary between properties
            and booking platforms. Some offer free cancellation within a certain
            period, while others may charge fees. Always review the cancellation
            policy before booking.
          </p>
        )}
        <hr className="mt-10"></hr>
        <button
          className="bg-white text-left font-bold mt-10 flex flex-row"
          onClick={toogleAnswer7}
        >
          How do I collect the keys and access the apartment?{" "}
          <svg
            height="26"
            viewBox="0 0 48 48"
            width="26"
            xmlns="http://www.w3.org/2000/svg"
            className={` bg-transparent ${
              openAnswer7 ? "rotate-180" : "rotate-0"
            }`}
          >
            <path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
        {openAnswer7 && (
          <p className="bg-white mt-5">
            The process for collecting keys and accessing the apartment varies.
            Some properties may have a key lockbox, while others require meeting
            with a property manager. Clear instructions are usually provided
            upon booking.
          </p>
        )}
      </div>

      <Footer />
    </>
  );
}