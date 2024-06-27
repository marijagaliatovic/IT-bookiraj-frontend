"use client"
import { useState } from "react";
import { addDays } from "date-fns";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker, Range } from 'react-date-range';
import NavBar from "./NavBar";

const BookNow = () => {
    const [isCheckInOpened,SetIsCheckInOpened] = useState(false);
    const [isCheckOutOpened,SetIsCheckOutOpened] = useState(false);
    const [isGuestsOpened,SetIsGuestsOpened] = useState(false);

    const handleCheckInClick = () => {
        SetIsCheckOutOpened(!isCheckOutOpened);
        SetIsGuestsOpened(false);
        SetIsCheckInOpened(!isCheckInOpened);
    }

    /* const handleCheckOutClick = () => {
        SetIsCheckInOpened(!isCheckInOpened);
        SetIsGuestsOpened(false);
        SetIsCheckOutOpened(!isCheckOutOpened);
    } */

    const handleGuestsClick = () => {
        SetIsCheckInOpened(false);
        SetIsCheckOutOpened(false);
        SetIsGuestsOpened(!isGuestsOpened);
    }

    const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <>
        <div className="bg-white flex w-max lg:w-max md:w-full md:justify-around rounded-md lg:flex-row center items-center py-2 px-4 border lg:rounded-full cursor-pointer shadow-lg">
            <div className="bg-white relative p-2 font-bold rounded-full border-r-4 cursor-pointer hover:underline"  >
                <p className="bg-white"onClick={handleCheckInClick}>Dates</p>
            {
                (isCheckInOpened && <DateRangePicker className="absolute z-10 -left-3/4 mt-6 customDataRangePicker shadow-2xl " onChange={(item) => setState([item.selection])}
                    moveRangeOnFirstSelection={false} months={2} ranges={state} direction="vertical"/>)
            }
            
            </div>
        
            <div className="bg-white relative p-2 mr-3 font-bold rounded-full border-r-4 cursor-pointer hover:underline" onClick={handleGuestsClick}>
                <p className="bg-white">Guests</p>
                {
                    (isGuestsOpened && (
                        <ul className="absolute z-10 mt-6 px-8 py-2 shadow-2xl w-16 bg-slate-400 flex flex-col items-center rounded-md">
                        <li className="bg-slate-400 block px-4 rounded-md font-bold hover:bg-slate-200">1</li>
                        <li className="bg-slate-400 block px-4 rounded-md font-bold hover:bg-slate-200">2</li>
                        <li className="bg-slate-400 block px-4 rounded-md font-bold hover:bg-slate-200">3</li>
                        <li className="bg-slate-400 block px-4 rounded-md font-bold hover:bg-slate-200">4</li>
                        <li className="bg-slate-400 block px-4 rounded-md font-bold hover:bg-slate-200">5</li>
                        <li className="bg-slate-400 block px-4 rounded-md font-bold hover:bg-slate-200">6</li>
                        <li className="bg-slate-400 block px-4 rounded-md font-bold hover:bg-slate-200">7</li>
                        <li className="bg-slate-400 block px-4 rounded-md font-bold hover:bg-slate-200">8</li>
                        </ul>
                    ))
                }
            </div>
            <div className="bg-slate-200 py-2 px-4 font-bold rounded-full cursor-pointer flex flex-row justify-center gap-1 hover:bg-slate-400">
                <p className="bg-transparent font-bold">Book</p>
            </div>
        </div>
    </> 
  );
}

export default BookNow;
