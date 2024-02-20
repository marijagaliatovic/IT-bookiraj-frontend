import Link from "@/node_modules/next/link";
import ReviewItem from "./ReviewItem";
import getTwoReviews from "@/lib/cotentfulTwoReviews";
import Footer from "./Footer";

const Reviews = async () => {
  const reviews = await getTwoReviews();

  return (
      <div className="bg-gray-400 flex flex-col items-center relative lg:mt-12 py-8">
          <h2 className="bg-gray-400  font-bold text-xl lg:text-2xl self-center lg:mb-2">
            Reviews
          </h2>
          <div className="small-line"></div>
          <p className="bg-gray-400  font-medium text-sm lg:text-lg text-center px-6 my-4 lg:px-20 lg:mx-48">
            Discover the stories of our delighted guests who have experienced the
            comfort and convenience of our apartments. From seamless booking to
            unforgettable stays, we&apos;re thrilled to share their glowing
            testimonials. Explore the experiences that make us the ultimate choice
            for your next home away from home!
          </p>
          <div className="bg-gray-400 hidden lg:flex lg:flex-row justify-center gap-10">
            {reviews.map((item, index) => (
              <ReviewItem key={index} {...item} />
            ))}
          </div>
          <div className="bg-gray-400 block lg:hidden">
            {<ReviewItem key={0} {...reviews[0]} />}
          </div>
          <div className="bg-gray-400 mt-4 lg:mr-12 w-full  lg:w-2/3  flex justify-center lg:justify-end">
          <i className="bg-slate-200 lg:mr-16 text-center not-italic text-sm lg:text-md font-bold hover:bg-slate-600 hover:text-slate-200 rounded-md p-2 shadow-xl tracking-wide transition duration-300 ease-in-out"><Link href="/reviews" className="bg-transparent">View all</Link></i>
          </div>
          
         
      </div>
  );
};

export default Reviews;
