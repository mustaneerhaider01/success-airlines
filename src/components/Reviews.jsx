import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import ReviewItem from "./ReviewItem";

const DUMMY_REVIEWS = [
  {
    username: "Elon Musk",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds",
    ratings: 4,
    platform: "IOS",
    country: "United States",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni at fugit accusamus non! Expedita similique quia vel ut maiores aperiam veritatis, eos vero perspiciatis nihil esse, recusandae, adipisci perferendis explicabo?",
  },
  {
    username: "Elon Musk",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds",
    ratings: 4,
    platform: "IOS",
    country: "United States",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni at fugit accusamus non! Expedita similique quia vel ut maiores aperiam veritatis, eos vero perspiciatis nihil esse, recusandae, adipisci perferendis explicabo?",
  },
  {
    username: "Elon Musk",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds",
    ratings: 4,
    platform: "IOS",
    country: "United States",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni at fugit accusamus non! Expedita similique quia vel ut maiores aperiam veritatis, eos vero perspiciatis nihil esse, recusandae, adipisci perferendis explicabo?",
  },
  {
    username: "Elon Musk",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds",
    ratings: 4,
    platform: "IOS",
    country: "United States",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni at fugit accusamus non! Expedita similique quia vel ut maiores aperiam veritatis, eos vero perspiciatis nihil esse, recusandae, adipisci perferendis explicabo?",
  },
];

function Reviews() {
  const rowRef = useRef();
  const [isMoved, setIsMoved] = useState(false);

  function handleScroll(direction) {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }

  return (
    <section name='reviews' className="mt-40">
      <div className="flex items-center justify-between">
        <div className="relative w-[235px] lg:w-[370px]">
          <h5 className="text-3xl md:text-5xl font-iowan font-bold pb-2">
            Appstore Reviews
          </h5>
          <div className="absolute right-0 bottom-0 h-[5px] bg-[#0063be] w-36 lg:w-56" />
        </div>

        <div className="flex items-center space-x-6 lg:space-x-14">
          <div
            className={`icon ${!isMoved && "hidden"}`}
            onClick={handleScroll.bind(this, "left")}
          >
            <ArrowLongLeftIcon className="text-black h-6 lg:h-8 hover:text-white" />
          </div>

          <div className="icon" onClick={handleScroll.bind(this, "right")}>
            <ArrowLongRightIcon className="text-black h-6 lg:h-8 hover:text-white" />
          </div>
        </div>
      </div>

      {/* reviews */}
      <div
        className="mt-28 flex items-center space-x-10 overflow-scroll scrollbar-hide"
        ref={rowRef}
      >
        {DUMMY_REVIEWS.map((review, index) => (
          <ReviewItem
            key={review.msg + index.toString() + Math.random().toString()}
            {...review}
          />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
