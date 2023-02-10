import React, { useState } from "react";
import { iconStar, illustrationThankYou } from "../assets";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [submited, setSubmited] = useState(false);
  const handleSubmit = () => {
    console.log("handleSubmit:", rating);
    setSubmited(true);
  };

  return (
    <section className="text-white bg-dark-blue bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.4)] min-w-[300px] max-w-[500px] h-[420px] sm:w-[450px] m-8 rounded-xl sm:rounded-3xl p-8 flex flex-col gap-4">
      {submited ? (
        <SelectedRating rating={rating} />
      ) : (
        <SelectRating
          rating={rating}
          handleSubmit={handleSubmit}
          setRating={setRating}
        />
      )}
    </section>
  );
};

const SelectRating = ({ rating, handleSubmit, setRating }) => (
  <>
    <div className="bg-medium-gray-transparent rounded-full w-max p-4">
      <img src={iconStar} alt="Star icon" className="opacity-100"></img>
    </div>
    <h1 className=" font-bold text-2xl">How did we do?</h1>
    <p className="text-lg text-light-gray">
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </p>

    <div className="text-lg flex justify-between pt-2 pb-4">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          className={`w-14 h-14 pt-1 rounded-full text-center hover:cursor-pointer  hover:text-white hover:bg-gradient-to-t hover:from-[#ffffff40] hover:to-[#ffffff40] ${
            rating === value
              ? "bg-orange text-white"
              : "bg-medium-gray-transparent text-light-gray"
          }`}
          onClick={() => setRating(value)}
        >
          {value}
        </button>
      ))}
    </div>

    <button
      className="bg-orange p-3 pb-2 rounded-full font-bold tracking-widest hover:bg-white hover:text-orange hover:cursor-pointer"
      onClick={handleSubmit}
    >
      SUBMIT
    </button>
  </>
);

const SelectedRating = ({ rating }) => (
  <div className="flex flex-col items-center justify-center text-center gap-8">
    <img className="w-[50%] pt-4" alt="Illustration" src={illustrationThankYou}></img>
    <p className="bg-medium-gray-transparent text-orange text-sm px-4 pt-2 pb-1 rounded-full">
      You selected {rating} out of 5
    </p>
    <div>
      <h1 className="font-bold text-2xl pb-2">Thank you!</h1>
      <p className="text-lg text-light-gray">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  </div>
);

export default Rating;
