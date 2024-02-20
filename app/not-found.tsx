import Link from "next/link";
import Image from "next/image";
import tom from "@/public/images/tom.png";
import Footer from "./components/Footer";

export default function NotFound(){
    return(
        <main className="text-center lg:top-36 top-32  relative w-full h-max">
            
            <div className=" flex flex-col justify-center items-center self-center">
                
                <div className=" flex flex-col justify-center items-center ">
                    <h2 className="bg-transparent text-4xl md:text-7xl font-bold">OOPS!</h2>
                    <p className="bg-transparent text-xl md:text-3xl m-2 font-bold">WE COULDN&apos;T FIND THE <br></br>PAGE YOU WERE LOOKING FOR.</p>
                    <i className="bg-white mt-5 text-center not-italic text-sm md:text-md font-bold hover:bg-slate-500 rounded-md  p-2 shadow-lg transition duration-300 ease-in-out">
                       <Link className="bg-transparent" href="/">Go back Home!</Link>
                    </i>
                </div>
                <Image className="self-start lg:ml-96 md:ml-28 md:h-1/3 h-1/2 md:w-1/2 w-2/3 lg:w-80 lg:h-60 my-4 lg:mb-0" alt="Not Found" height ={200} width = {300} src= {tom}></Image>
            </div>
            <Footer/>
        </main>
        
    )
}