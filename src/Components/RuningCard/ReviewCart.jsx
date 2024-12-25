import React from "react";

const ReviewCart = ({ card }) => {
  let { author_img, rating, author_name, review, product_image } = card;
  return (
    <div>
      <div className="card bg-base-100 h-80 w-64 shadow-xl">
        <figure>
          <div className="h-48">
          <img className="h-full w-full" src={product_image} alt="author img" />
          </div>
        </figure>
        <div className="card-body mt-5">
          <h2 className="card-title">{author_name}</h2>
          <p>{review}</p>
          <p className="font-bold"> Rating: {rating}.0</p>
        </div>
        <div className="absolute rounded-full border-4 border-green-500 top-16 left-20 h-24 w-24">
          <img className="w-full h-full rounded-full" src={author_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
