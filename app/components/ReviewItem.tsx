import Image from "next/image";

interface review {
  picture: {
    title: string;
    url: string;
  };
  alt: string;
  name: string;
  apartment: string;
  stars: number;
  text: string;
}

const ReviewItem = (item: review) => {
  const renderStars = () => {
    const starElements = [];
    const totalStars = 5;

    for (let i = 0; i < totalStars; i++) {
      const isFilled = i < item.stars;

      starElements.push(
        <svg
          key={i}
          className={`bg-stone-200 w-8 h-8 stroke-black stroke-1 ${
            isFilled ? "fill-black" : "border-black"
          }`}
          aria-hidden="true"
          fill={isFilled ? "black" : "none"}
          viewBox="0 0 22 20"
        >
          <path d="M11 2l1.98 4.017 4.472.65-3.243 3.15.766 4.45-4.016-2.11-4.017 2.11.765-4.45-3.243-3.15 4.471-.65z" />
        </svg>
      );
    }
    return starElements;
  };
  return (
    <div className="bg-stone-200 top-0 flex flex-col items-center relative m-8 lg:m-4 lg:p-4 lg:w-1/4">
      <div className="bg-stone-200 flex flex-row justify-center gap-2 pt-5">
        <Image
          className="bg-stone-200 rounded-full self-start"
          height={50}
          width={100}
          src={item.picture.url}
          alt={item.picture.title}
        ></Image>
        <div className="bg-stone-200 flex flex-col justify-start p-2 self-center">
          <p className="bg-stone-200 font-extrabold text-lg">{item.name}</p>
          <p className="bg-stone-200 font-bold text-base">
            for{" "}
            <span className="bg-stone-200 font-extrabold text-base">
              {item.apartment}
            </span>
          </p>
          <div className="bg-stone-200 flex items-center my-2">
            <div className="bg-stone-200 flex items-center my-2">
              {renderStars()}
            </div>
          </div>
        </div>
      </div>
      <p className="bg-stone-200 text-left text-xs px-3 m-3">
        {item.text}
      </p>
    </div>
  );
};

export default ReviewItem;
