"use client";

import Link from "@/node_modules/next/link";
import { SetStateAction, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const handleMessageChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <>
      <NavBar/>
      <div className="flex flex-col items-center relative lg:mt-12 py-8">
        <h2 className="font-bold text-xl lg:text-2xl self-center lg:mt-10 top-24">
          Contact Us
        </h2>
        <div className="small-line"></div>
        <p
          className="font-medium text-sm lg:text-base text-center px-6 my-4  sm:mx-auto md-mx-auto lg:w-1/2 md:w-2/3"
        >
          We&apos;d love to hear from you! Whether you have a question,
          suggestion, or just want to say hello, feel free to reach out to us
          using the form below.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white mb-20 pt-10 pb-10 mx-5 sm:mx-auto md:mx-auto max-w-md px-10 rounded-md shadow-lg"
      >
        <label className="bg-white block mb-2 text-sm font-semibold">
          Username:
        </label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="w-full border p-2 rounded-md bg-white"
          required
        />

        <label className="bg-white block mt-4 mb-2 text-sm font-semibold">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full border p-2 rounded-md bg-white"
          required
        />

        <label className="bg-white block mt-4 mb-2 text-sm font-semibold">
          Message:
        </label>
        <textarea
          value={message}
          onChange={handleMessageChange}
          className="w-full border p-2 rounded-md bg-white"
          placeholder="Type your message here..."
          required
        />
        <div className="text-center bg-white">
          <button
            type="submit"
            className="mt-4 bg-gray-400 font-bold p-2 rounded-md hover:bg-slate-600 shadow-xl"
          >
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}
