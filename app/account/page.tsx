"use client"

import Link from "next/link";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

export interface User{
    email:string,
    userName:string,
    userId:string
}

export default function Account(){
    const [user,setUser] = useState<User>();
    const [userId,setuserId] = useState<string>("");
    useEffect(() => {
            const storedUser = localStorage.getItem('user');
                 if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    setuserId(parsedUser.passport.user);
                 }
                 
            try {
                console.log("User id: "+ userId); 
                
            } catch (error) {
                console.log("Error fetching user data:", error);
            }
       
    },[])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("User id: " + userId);
                if (userId) {
                    const response = await fetch( `${process.env.EXPRESS_API_URL}/logIn/user/${userId}`, {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            'Accept': 'application/json'
                        }
                    });

                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }

                    const userData = await response.json();
                    setUser(userData);
                }
            } catch (error) {
                console.log("Error fetching user data:", error);
            }
        };

        fetchData();
    }, [userId]);

    const handleLogout = async ()=> {
        localStorage.clear();
        setUser(undefined);
        //need to clear session on backend when user logs out
        try{
            const response = await fetch( `${process.env.EXPRESS_API_URL}/logIn/logOut`, {
                method: "POST",
                credentials: "include"
            });
    
            console.log("Response from logging out:" + response);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
        }catch(error){
            console.error('Error logging out:', error);
        }
        
    }

    return (
        <>
            <NavBar />
            <div className="flex flex-col items-center relative lg:mt-12 py-8">
                <h2 className="font-bold text-xl lg:text-2xl self-center lg:mt-10 top-24">User</h2>
                <div className="small-line"></div>
            </div>
            
            <div className="bg-white mb-20 pb-10 mx-5 sm:mx-auto md:mx-auto max-w-md px-10 rounded-md shadow-lg">
                <label className="bg-white block mb-2 text-sm pt-10 font-semibold">Email: {user?.email}</label>
                <label className="bg-white block mt-4 mb-2 text-sm font-semibold">Username: {user?.userName}</label>
                <div className="text-center bg-white">
                    <Link href="\">
                        <button onClick={handleLogout} className="mt-5 bg-gray-400 font-bold p-2 rounded-md hover:bg-slate-600 shadow-xl">
                            Log out
                        </button>
                    </Link>
                </div>
            </div>
            
            <Footer />
        </>
    );
}