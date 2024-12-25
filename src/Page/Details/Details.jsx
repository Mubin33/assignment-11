import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';



const Details = () => {
    const data = useLoaderData([])
    let {
        _id,
        price,
        photo,
        name,
        hr_photo,
        hr_name,
        hr_email,
        description,
        country,
        city,
      } = data
    return (
        <div>
          <Helmet>
          <title>{name}-details  || MNS-service</title>
          </Helmet>
             <div className="hero bg-base-200 min-h-[700px]">  
    <div className="card bg-base-100 lg:w-8/12  h-[650px] shrink-0 p-6 shadow-2xl"> 
      <div className="md:px-10 ">
        <img className="h-80 rounded-md w-full" src={photo} alt="" />
      </div>
      <div className="md:pl-6  "> 
        <h1 className="text-xl mt-4  font-bold">{name}</h1> 
        <div className="flex items-center mt-2 space-x-2">
          <img className="h-6 w-6 rounded-full " src={hr_photo} alt="" />
          <p className="text-sm font-bold ">{hr_name}</p>
        </div>
        <p className="text-xs mt-2 flex items-center gap-1"><FaLocationDot />  {city}, {country}</p>
        <p className="text-sm   my-2">
          { description}
        </p>
        <p className="text-sm font-semibold flex items-center gap-1"><TbCurrencyTaka size={14}/>  {price} BDT</p>
        <Link to={`/booknow/${_id}`}>
        <button className="btn btn-sm mt-5 text-sm bg-green-400 text-white">Book Now</button>
        </Link>
      </div>
    </div> 
  </div>
</div> 
    );
};

export default Details;