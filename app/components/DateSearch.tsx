"use client"
import { useState } from "react";
import { addDays } from "date-fns";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Range, DateRangePicker  } from "react-date-range";


const DateRange = () => {
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
     <div className="bg-white flex w-max lg:w-max md:w-full md:justify-around rounded-md lg:flex-row center items-center py-2 px-4 border lg:rounded-full cursor-pointer shadow-lg">
        <div className="bg-white relative p-2 font-bold rounded-full border-r-4 cursor-pointer hover:underline">
            <p className="bg-white"onClick={handleCheckInClick}>Dates</p>
        {
            (isCheckInOpened && <DateRangePicker className="absolute md:w-full z-10 -left-3/4 mt-6 customDataRangePicker grow shadow-2xl " onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false} months={2} ranges={state} direction="vertical"/>)
        }
        
        </div>
       
        <div className="bg-white relative p-2 mr-3 font-bold rounded-full border-r-4 cursor-pointer hover:underline" onClick={handleGuestsClick}>
            <p className="bg-white">Guests</p>
            {
                (isGuestsOpened && (
                    <ul className="absolute z-10 mt-6 px-8 py-2 shadow-2xl w-16 bg-slate-400 flex flex-col items-center rounded-md">
                      {[...Array(8)].map((_, index) => (
                            <li key={index} className="bg-slate-400 block px-4 rounded-md font-bold hover:bg-slate-200">{index + 1}</li>
                        ))}
                    </ul>
                  ))
            }
        </div>
        <div className="bg-slate-200 p-2 font-bold rounded-full cursor-pointer flex flex-row justify-center gap-1 hover:bg-slate-400">
            <svg className="bg-transparent text-black self-center" xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="black" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="#000000"></path>
            </svg>
            <p className="bg-transparent font-bold">Search</p>
        </div>
    </div> 
  );
}

export default DateRange;
