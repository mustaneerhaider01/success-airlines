import { StarIcon } from "@heroicons/react/24/solid";

function ReviewItem({ image, msg, platform, country, ratings, username }) {
  return (
    <div
      className="bg-white px-6 flex flex-col items-center rounded-2xl shadow-lg
    min-w-[350px] lg:min-w-[500px] overflow-visible"
    >
      <img
        className="h-32 w-32 object-contain rounded-full mb-4 border-4 border-[#00A1FF] hover:opacity-70 cursor-pointer mt-6"
        src={image}
        alt={msg}
      />

      <h3 className="font-semibold">{username}</h3>
      <div className="flex space-x-1 mb-4">
        {[...Array(ratings).fill(0)].map((_, index) => (
          <StarIcon key={index} className="h-3 w-3 text-[#F6CF00]" />
        ))}
      </div>

      <div>
        <p className="text-[#646464] text-sm lg:text-base text-center">{msg}</p>

        <p className="text-[#1682FD] pb-6 pt-4 space-x-1 text-sm text-center">
          <span>{platform}</span>
          <span>{country}</span>
        </p>
      </div>
    </div>
  );
}

export default ReviewItem;
