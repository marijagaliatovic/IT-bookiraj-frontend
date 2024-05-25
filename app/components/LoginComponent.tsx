"use client"

import Link from "@/node_modules/next/link"
import { FormEvent, SetStateAction, useContext, useEffect, useState } from "react"
import Footer from "./Footer"
//import UserContext from "../UserContext"

export interface User {
  userName: string;
  email: string;
  password: string;
}

export default function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState("");

  //const { user, rerenderFlag, userInfo, renderFlag } = useContext(UserContext);
  

 /*  useEffect(() => {
    console.log("User from userInfo log in: " + JSON.stringify(user) + " Render flag from log in " + rerenderFlag);
  }, [user]); */

  const handleUsernameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setUsername(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setPassword(e.target.value);
  };


  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    localStorage.clear();
    e.preventDefault();
    let userValues={
      email:username,
      password:password
    }

    try{
      const response = await fetch(`${process.env.EXPRESS_API_URL}/logIn`,{
      //const response = await fetch("http://localhost:8080/logIn", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify(userValues) 
      })

      const responseData = await response.json();
      if (!response.ok) {
        console.log('Login failed:', responseData.message);
        setErrorMessage(responseData.message);
      }
      else{
        console.log("responseData from login" + JSON.stringify(responseData));
        localStorage.setItem('user', JSON.stringify(responseData));
        //userInfo(responseData); //Set the user to recived data
        //renderFlag(true); //functions never executed
      
        // Redirect to home page after successful login
        window.location.href = '/'; //full page reload -> need to find better way, router not working
      }

    }catch(error){
      console.log(error)
    }

    const displayErrorMessage = () => {

      if(!errorMessage || errorMessage == ''){
          return null;
      }
  
      return (
        <div className="p-8 bg-slate-700">
          <a className="text-bold text-white bg-transparent">Error: {errorMessage}</a>
        </div>
      );
    }
  
  return (
      <>
      <div className="flex flex-col items-center relative lg:mt-12 py-8">
          <h2 className="font-bold text-xl lg:text-2xl self-center lg:mt-10 top-24">Log in</h2>
          <div className="small-line"></div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white mb-20 pb-10 mx-5 sm:mx-auto md:mx-auto max-w-md px-10 rounded-md shadow-lg">
                  <label className="bg-white block mb-2 text-sm pt-10 font-semibold">Email:</label>
                  <input
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                      className="w-full border p-2 rounded-md bg-white"
                      required
                  />

                  <label className="bg-white block mt-4 mb-2 text-sm font-semibold">Password:</label>
                  <input
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="w-full border p-2 rounded-md bg-white"
                      required
                  />

                  <div className="text-center bg-white">
                  <button type="submit" className="mt-5 bg-gray-400 font-bold p-2 rounded-md hover:bg-slate-600 shadow-xl">
                      Log in
                  </button>
                  </div>
                  <p className="bg-white mt-5 text-center py-5 text-sm text-gray-300">
                    Don&apos;t have an account?&nbsp;
                    <Link href="/signup">
                      <span className="bg-white font-semi-old hover:underline">Sign up here</span>
                    </Link>
                  </p>
          	      {displayErrorMessage()}
              </form>
          <Footer/>
    </>
  );
}}