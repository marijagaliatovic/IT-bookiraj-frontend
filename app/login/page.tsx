"use client"

import Link from "@/node_modules/next/link";
import { SetStateAction, useState } from "react";
import Footer from "../components/Footer";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setUsername(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setPassword(e.target.value);
  };

  const handleSubmit = () => {
     
  };
  
  return (
      <>
      <div className="flex flex-col items-center relative lg:mt-12 py-8">
          <h2 className="font-bold text-xl lg:text-2xl self-center lg:mt-10 top-24">Log in</h2>
          <div className="small-line"></div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white mb-20 pb-10 mx-5 sm:mx-auto md:mx-auto max-w-md px-10 rounded-md shadow-lg">
                  <label className="bg-white block mb-2 text-sm pt-10 font-semibold">Username:</label>
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
            <span className="bg-white font-semi-old hover:underline">
              Sign up here
            </span>
          </Link>
        </p>
              </form>
              
          <Footer/>
    </>
  )
}