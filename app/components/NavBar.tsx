"use client";

import Header from "./Header";
import HamburgerMenu from "./HamburgerMenu";
import React, { useEffect, useState } from "react";

export default function NavBar(){
    const [open, setOpen] = useState(false);

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
    }  catch (error) {
        console.error('Error checking authentication:', error);
      } 
    },[]); 

    return (
        <div className="container flex items-center justify-between">
            <Header user={newUser}/>
            <HamburgerMenu open={open} clickHandler={setOpen} user={newUser}/>
        </div>
    )
}
