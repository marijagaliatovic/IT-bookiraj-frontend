import Link from "@/node_modules/next/link";
import ReviewItem from "./ReviewItem";
import Footer from "./Footer";
import getReviews from "@/lib/contentfulAllReviews";


const Reviews = async () => {
  const reviews = await getReviews.getTwoReviews();

  return (
      <div className="bg-gray-400 flex flex-col items-center relative lg:mt-12 py-8">
          <h2 className="bg-gray-400  font-bold text-xl lg:text-2xl self-center lg:mb-2">
            Reviews
          </h2>
          <div className="small-line"></div>
          <p className="bg-gray-400 lg:w-3/4 md:w-2/3 sm:1/2 text-sm lg:text-base text-center px-10 my-4 lg:px-20 lg:mx-48">
  <span className="bg-gray-400 font-medium block lg:inline">
    Discover the stories of our delighted guests who have experienced the comfort and convenience of our apartments.
  </span>
  <span className="bg-gray-400 hidden font-medium md:hidden lg:inline">
    From seamless booking to unforgettable stays, we&apos;re thrilled to share their glowing testimonials. Explore the experiences that make us the ultimate choice for your next home away from home!
  </span>
</p>

          <div className="bg-gray-400 hidden lg:flex lg:flex-row justify-center gap-10">
            {reviews.map((item, index) => (
              <ReviewItem key={index} {...item} />
            ))}
          </div>
          <div className="bg-gray-400  md:block lg:hidden">
            {<ReviewItem key={0} {...reviews[0]} />}
          </div>
          <div className="bg-gray-400 mt-4 lg:mr-12 w-full  lg:w-2/3  flex justify-center lg:justify-end">
          <i className="bg-slate-200 lg:mr-16 text-center not-italic text-sm lg:text-md font-bold hover:bg-slate-600 hover:text-slate-200 rounded-md p-2 shadow-xl tracking-wide transition duration-300 ease-in-out"><Link href="/reviews" className="bg-transparent">View all</Link></i>
          </div>
          
         
      </div>
  );
};

export default Reviews;

function getTwoReviews() {
  throw new Error("Function not implemented.");
}
