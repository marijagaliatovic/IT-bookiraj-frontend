import Link from "next/link";

export default function Footer(){
    return(
        <div className="bg-gray-600 relative bottom-0 w-full flex flex-row justify-between lg:justify-center lg:gap-20 lg:mt-12 p-8">
            <div className="bg-gray-600 flex flex-col justify-start ">
                <h2 className="bg-gray-600 text-white font-serif mb-4 lg:text-xl">It-bookiraj</h2>
                <p className="bg-gray-600 text-white font-serif text-xs">Šibenska 19</p>
                <p className="bg-gray-600 text-white font-serif text-xs">21000 Split</p>
                <p className="bg-gray-600 text-white font-serif text-xs">+221 222 222</p>
            </div>
            <div className="bg-gray-600 flex flex-col justify-start">
                <h2 className="bg-gray-600 text-white font-serif mb-4 lg:text-xl">Navigation</h2>
                <p className="bg-gray-600 text-white font-serif text-xs hover:underline"><Link className="bg-transparent" href="/">Home</Link></p>
                <p className="bg-gray-600 text-white font-serif text-xs hover:underline"><Link className="bg-transparent" href="/apartmentlistings">Apartments</Link></p>
                <p className="bg-gray-600 text-white font-serif text-xs hover:underline"><Link className="bg-transparent" href="/signup">Sign Up</Link></p>
            </div>
            <div className="bg-gray-600 flex flex-col justify-start">
                <h2 className="bg-gray-600 text-white font-serif mb-4 lg:text-xl">Information</h2>
                <p className="bg-gray-600 text-white font-serif text-xs hover:underline"><Link className="bg-transparent" href="/faq">FAQ</Link></p>
                <p className="bg-gray-600 text-white font-serif text-xs hover:underline"><Link className="bg-transparent" href="/contact">Contact Us</Link></p>
            </div>
        </div>
    )
}