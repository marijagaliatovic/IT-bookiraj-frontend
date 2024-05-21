"use client";

import React, { useContext, useEffect, useState } from "react";
//import axios from 'axios'; 
//import UserContext, { User } from "../UserContext";
import Link from "next/link";

export default function Header() {
  localStorage.clear();
 // const { user, userInfo, renderFlag } = useContext(UserContext);
  const [isAccomodationOpen, setIsAccommodationOpen] = useState(false);
  const [newUser, setnewUser] = useState<string>("");
  useEffect(() => {
    //const checkAuthentication = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        console.log("storedUSer: ", storedUser);
        if(storedUser){
          const parsedUser = JSON.parse(storedUser)
          if(newUser != parsedUser.passport.user){
            //console.log("parsedUser: ", parsedUser);
            //userInfo(parsedUser.passport.user);
            setnewUser(parsedUser.passport.user);
            //renderFlag(true);
          }
         
        }

        /*const response = await axios.get('http://localhost:8080/login/status', { withCredentials: true });
        console.log("Status response: " + response);
        if (response && response.data.user != user) {
          console.log("Current User:", user, "Response.data.user:", response.data.user);
          userInfo(response.data.user);
          console.log("New User: ", user);
          renderFlag(true);
        } else {
          console.log("Current User: ", user);
          renderFlag(false);
        }*/
      }  catch (error) {
        console.error('Error checking authentication:', error);
      } 
    //}

    //checkAuthentication();
  },[]); 

  const handleAccommodationHover = () => {
    setIsAccommodationOpen(true);
  };

  const handleAccommodationLeave = () => {
    setIsAccommodationOpen(false);
  };

  const handleAccommodationClick = () =>{
    setIsAccommodationOpen(false);
  }

  return (
      <nav className="hidden fixed w-full z-10 top-0 lg:block">
        <ul className="flex flex-row justify-center gap-6 pt-10 pl-20 pr-20 pb-5 ">
          <li className="text-base font-semibold not-italic hover:underline  cursor-pointer bg-transparent"><Link className="bg-transparent" href="/">HOME</Link></li>

          <li className="text-base font-semibold not-italic relative  cursor-pointer bg-transparent" 
            onMouseEnter={handleAccommodationHover}
            onMouseLeave={handleAccommodationLeave}> 
            <div className="flex flex-row justify-center h-min">
              <a className="bg-transparent">ACCOMODATION</a>
              <svg height="26" viewBox="0 0 48 48" width="26" xmlns="http://www.w3.org/2000/svg" className={` bg-transparent ${isAccomodationOpen ? "rotate-180" : "rotate-0"}`}><path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
            </div>
            
            {isAccomodationOpen && (
              <ul className="absolute z-10 left-1/2 transform -translate-x-1/2 p-2 w-52 bg-gray-400 rounded-md shadow-lg">
                <li className="bg-transparent">
                  <Link href="/apartmentlistings" className="bg-gray-400 block px-4 py-2 text-sm font-semibold hover:bg-slate-500 transition duration-300 ease-in-out rounded-md " onClick={handleAccommodationClick}>APARTMENT LISTINGS</Link>
                </li>
                <li className="bg-transparent">
                  <Link href="/specialoffers" className="bg-gray-400 block px-4 py-2 text-sm font-semibold hover:bg-slate-500 transition duration-300 ease-in-out rounded-md" onClick={handleAccommodationClick}>SPECIAL OFFERS</Link>
                </li>
                <li className="bg-transparent">
                  <Link href="/reviews" className="bg-gray-400 block px-4 py-2 text-sm font-semibold hover:bg-slate-500 transition duration-300 ease-in-out rounded-md" onClick={handleAccommodationClick}>REVIEWS</Link>
                </li>
              </ul>
            )}
          </li>
          
          { newUser  ? ( 
          <li className="text-base font-semibold not-italic hover:underline  cursor-pointer bg-transparent"><Link className="bg-transparent" href="/account">ACCOUNT</Link></li>
            ) : (
            <li className="text-base font-semibold not-italic hover:underline cursor-pointer bg-transparent">
              <Link className="bg-transparent" href="/signup">SIGN UP</Link>
            </li>
            )}
          <li className="text-base font-semibold not-italic hover:underline cursor-pointer bg-transparent">
            <Link className = "bg-transparent" href="/contact">CONTACT US</Link>
          </li>
{/* 
        {session && session.user ? (
            <li className="text-base font-semibold not-italic relative  cursor-pointer bg-transparent">
              <div className="flex flex-row justify-center h-min" onClick={handleAccountClick}>
                <a className="bg-transparent">ACCOUNT</a>
                <svg height="26" viewBox="0 0 48 48" width="26" xmlns="http://www.w3.org/2000/svg" className={` bg-transparent ${isAccountOpen ? "rotate-180" : "rotate-0"}`}><path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
              </div>
            </li>
        ) :  */}
          {/* <li className="text-base font-semibold not-italic hover:underline cursor-pointer bg-transparent">
            <Link className="bg-transparent" href="/signup">SIGN UP</Link>
          </li> */}
       {/* }*/}
          
        </ul>
      </nav>
  );
}