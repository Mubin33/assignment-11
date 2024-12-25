import React, { useEffect, useState } from "react";
import ReviewCart from "./ReviewCart";
import Marquee from "react-fast-marquee";

const RuningCard = () => {
  let [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-center underline my-8">Top fan (Review)</h1>
      <div>
      <Marquee speed={170} pauseOnHover={true} >
        <div className="flex gap-4 p-0 my-4">
          {cards.map((item) => (
            <ReviewCart card={item} />
          ))}
        </div>
      </Marquee>
      </div>
      <div>
      <Marquee speed={170} pauseOnHover={true} direction="right">
        <div className="flex gap-4 p-0 my-4">
          {cards.map((item) => (
            <ReviewCart card={item} />
          ))}
        </div>
      </Marquee>
      </div>
    </div>
  );
};

export default RuningCard;
