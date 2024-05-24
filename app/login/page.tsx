"use client"

import { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import NavBar from "../components/NavBar";
import UserContext, { User } from '../UserContext'

export default function Login() {
/*   const [user, setUser] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [rerenderFlag, setRerenderFlag] = useState<boolean>(false); 

  const userInfo = (userId:string) => {
      console.log("Setting user info:", userId);
      setUser(userId);
      console.log("User is set:", userId);
  };  

  const renderFlag = (render: boolean) => {
      console.log("Setting render flag:", render);
      setRerenderFlag(render);
  }; */
  
  return (
    //<UserContext.Provider value={{ user, renderFlag, rerenderFlag, userInfo, loading }}>
        <LoginComponent/>
    //</UserContext.Provider>
  );
}