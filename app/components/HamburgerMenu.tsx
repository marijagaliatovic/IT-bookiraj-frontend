"use client"

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export type HamburgerProps = {
  open: boolean;
  clickHandler: Dispatch<SetStateAction<boolean>>;
};

export default function HamburgerMenu({ open, clickHandler }: HamburgerProps) {
  const [isAccommodationOpen, setIsAccommodationOpen] = useState(false);
  const [newUser, setnewUser] = useState<string>(""); 

  const handleAccommodationClick = () => {
  setIsAccommodationOpen(!isAccommodationOpen);
  }

  const handleNavBarClick = () => {
    if(isAccommodationOpen)
    {
      setIsAccommodationOpen(false);
    }
  };

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
      }  catch (error) {
        console.error('Error checking authentication:', error);
      }
    },[]);

  useEffect(()=>{
    const handleClickOutside = (event:MouseEvent)=>{
        const navBar = document.getElementById("navBar");
        const navIcons = document.getElementById("navIcons");
        
        //if dropdown is open and we click outside of dropdown and filters button, close the dropdown
        if( navBar && !navBar.contains(event.target as Node) && navIcons && !navIcons.contains(event.target as Node)) //If dropdown is not clicked (if event target is not on the dropdown ); Node is interface for nodes in DOM
        {
            clickHandler(false); //If we click outside of the filter container it will close it
        }
    };

    document.addEventListener("mousedown", handleClickOutside); //if we click anywhere on the document handleClickOutside is called

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    }
  });
    
  return (
    <>
      <div className="bg-transparent lg:hidden hover:cursor-pointer p-2 z-50 w-max" id="navIcons"
        onClick={() => {
                clickHandler(!open);
                handleNavBarClick();
            }}>
        <Bars3Icon className={` bg-transparent w-6 h-6 ${open ? "hidden" : "block"}`} />
        <XMarkIcon className={`bg-transparent w-6 h-6 ${open ? "block" : "hidden"}`} />
      </div>
      <nav className={`flex lg:hidden items-center justify-center hover:cursor-pointer p-10 w-screen absolute top-0 right-0 z-20 opacity-95 ${open ? "block" : "hidden"} `} onClick={handleNavBarClick} id="navBar" >
        <ul className="flex flex-col justify-start items-start gap-5 p-10 ">
        <li className="text-base font-semibold not-italic tracking-widest hover:underline cursor-pointer" onClick={()=>{clickHandler(false)}}><Link href="/">HOME</Link></li>

        <li className="text-base font-semibold not-italic tracking-widest relative hover:underline cursor-pointer" 
          onClick={handleAccommodationClick}> 
          <a>ACCOMODATION</a>
          {isAccommodationOpen && (
            <ul className="absolute z-10 left-1/2 transform -translate-x-1/2 p-2 w-60 bg-gray-200 rounded-md shadow-lg mt-1">
              <li className="bg-transparent"><Link href="/apartmentlistings" className="bg-gray-200 block px-4 pt-2 pb-3 text-sm font-semibold border-b-2 border-slate-500 rounded-md" onClick={()=>{clickHandler(false)}} >APARTMENT LISTINGS</Link></li>
              <li className="bg-transparent"><Link href="/specialoffers" className="bg-gray-200 block px-4 pt-2 pb-3 text-sm font-semibold border-b-2 border-slate-500 rounded-md" onClick={()=>{clickHandler(false)}}>SPECIAL OFFERS</Link></li>
              <li className="bg-transparent"><Link href="/reviews" className="bg-gray-200 block px-4 pt-2 pb-3 text-sm font-semibold border-b-2 border-slate-500 rounded-md" onClick={()=>{clickHandler(false)}}>REVIEWS</Link></li>
            </ul>
          )}
        </li>
        
        <li className="text-base font-semibold not-italic tracking-widest hover:underline cursor-pointer">
          <Link href="/signup"  onClick={()=>{clickHandler(false)}}>SIGN UP</Link>
        </li>

        { newUser  ? (
        <li className="text-base font-semibold not-italic tracking-widest hover:underline cursor-pointer">
          <Link href="/contact" onClick={()=>{clickHandler(false)}}>ACCOUNT</Link>
        </li>
        ) : (
        <li className="text-base font-semibold not-italic tracking-widest hover:underline cursor-pointer">
          <Link href="/contact" onClick={()=>{clickHandler(false)}}>SIGN UP</Link>
        </li>
        )}
       
      </ul>
      </nav> 
    </>
  );
}
