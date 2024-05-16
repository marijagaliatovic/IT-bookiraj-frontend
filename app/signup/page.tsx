"use client"
import Link from "@/node_modules/next/link";
import { FormEvent, SetStateAction, useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export interface User {
  userName: string;
  email: string;
  password: string;
}

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User>();
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const handleSubmit =  async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data={
      userName:username,
      email:email,
      password:password
    }

    try{
      const response = await fetch("https://node-mongodb-api-v19y.onrender.com/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Specify JSON content type
      },
      body: JSON.stringify(data) // Convert data to JSON format
    })

    if (!response.ok) {
        const errorData = await response.json();

        setErrorMessage(JSON.stringify(errorData.error))
        console.log("errorMessage" + errorMessage)
    }
    else{
      const responseData = await response.json();
      console.log("signup data:" + JSON.stringify(responseData) )
      setUser(responseData); // Set the user state with the response data
      window.location.href = '../login';
    }
   
    
    }catch(err){
      console.log(err)
    } 
    
  };

  const renderUserData = () => {
    if (!user) {
      return null; // If user data is not available, return null
    }

    return (
      <div className="flex flex-col items-center justify-center">
        <a>Name: {user.userName}</a>
        <a>Email: {user.email}</a>
        <a>Password: {user.password}</a>
      </div>
    );
  };

  const displayErrorMessage = () => {

    if(!errorMessage || errorMessage == ''){
        return null;
    }

      console.log("Uslo")

    return (

      <div className="p-8 bg-slate-700">
        <a className="text-bold text-white bg-transparent">Error: {errorMessage}</a>
      </div>
    );

 }
  return (
    <>
      <NavBar/>
      <div className="flex flex-col items-center relative lg:mt-12 py-8">
        <h2 className="font-bold text-xl lg:text-2xl self-center lg:mt-10 top-24">
          Sign up
        </h2>
        <div className="small-line"></div>
      </div>
      <form onSubmit={handleSubmit} className="bg-white mb-20 pb-10 mx-5 sm:mx-auto md:mx-auto max-w-md px-10 rounded-md shadow-lg">
        <label className="bg-white block mb-2 text-sm pt-10 font-semibold">
          Create username:
        </label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="w-full border p-2 rounded-md bg-white"
          required/>

        <label className="bg-white block mt-4 mb-2 text-sm font-semibold">
          Enter email:
        </label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full border p-2 rounded-md bg-white"
          required/>

        <label className="bg-white block mt-4 mb-2 text-sm font-semibold">
          Create password:
        </label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full border p-2 rounded-md bg-white"
          required/>

        <div className="text-center bg-white">
          <button
            type="submit"
            className="mt-5 bg-gray-400 font-bold p-2 rounded-md hover:bg-slate-600 shadow-xl">
            Sign up
          </button>
        </div>


        <p className="bg-white mt-10 text-center py-5 text-sm text-gray-400">
          Already have an account?&nbsp;
          <Link href="/login">
            <span className="bg-white font-semi-old hover:underline">
              Log in here
            </span>
          </Link>
        </p>
        {displayErrorMessage()}
        {/*renderUserData()*/}
      </form>
      <Footer />
    </>
  );
}
