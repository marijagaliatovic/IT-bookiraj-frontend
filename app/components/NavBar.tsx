"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import HamburgerMenu from "./HamburgerMenu";

export default function NavBar(){
    const[open,setOpen] = useState(false);

    return (
        <div className="container flex items-center justify-between">
            <Header/>
            <HamburgerMenu open={open} clickHandler={setOpen}/>
        </div>
    )
}