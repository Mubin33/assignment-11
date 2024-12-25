import React, { useContext, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";

const ServiceCard = ({ service, handleDelete }) => {
  let location = useLocation();
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
  } = service;

  const handleStatusChange = async (id, previousStatus, updateStatus) => {
    if (previousStatus === updateStatus) {
      return console.log("sorry");
    }
    try {
      await axios.patch(`https://mubins-server-project.vercel.app/bid-status/${id}`, {
        status: updateStatus,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`md:flex md:p-5 rounded-2xl ${location.pathname !== "/" ? "bg-base-200": "bg-base-100" }  p-2  mt-14 items-center shadow-xl shadow-blue-200`}>
      <div className="h-48 w-full md:w-56 mr-6">
        <img className="h-full rounded-md min-w-56" src={photo} alt="" />
      </div>
      <div className="pl-6 mt-3 md:mt0 md:border-l-2 flex-1 border-gray-400">
        <h1 className="text-2xl font-bold">{name}</h1>
        {location.pathname !== "/bookedrequest" ? (
          <>
            <div className="flex items-center mt-2 space-x-2">
              <img className="h-6 w-6 rounded-full " src={hr_photo} alt="" />
              <p className="text-sm font-bold ">{hr_name}</p>
            </div>
            <p className="text-xs mt-2 flex items-center gap-1">
              <FaLocationDot /> {city}, {country}
            </p>
          </>
        ) : (
          ""
        )}

        {location.pathname === "/bookedrequest" ? (
          <>
            <div className="px-3 mt-1 border-r-2 border-l-2 rounded-lg border-green-500">
              <p className="font-semibold underline">Booking information ---</p>
              <div className="flex items-center my-1 space-x-2">
                <p className="text-sm font-bold text-green-500">
                  {service?.bookedUserName}
                </p>
                <img
                  className="h-6 w-6 rounded-full "
                  src={service?.bookedUserPhoto}
                  alt=""
                />
              </div>
              <h1 className="text-xs mt-1 ">
                <b>Booking Date:-</b>
                {service?.date}
              </h1>
              <h2 className="text-xs my-1 ">
                <b>Booking Message:-</b>
                {service?.message}
              </h2>
            </div>
            <div className="flex items-center justify-evenly">
              <span className="text-sm  ">Action:-</span>
              <select
                className="select select-bordered select-sm  "
                onChange={(e) => {
                  const newStatus = e.target.value;
                  handleStatusChange(_id, service?.status, newStatus);
                }}
                defaultValue={service?.status}
              >
                <option value="Pending" selected>
                  Pending
                </option>
                <option value="Working">Working</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </>
        ) : (
          <p className="text-sm   my-1">
            {description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}
          </p>
        )}

        {location.pathname === "/bookedrequest" ? (
          ""
        ) : (
          <p className="text-sm font-semibold flex items-center gap-1">
            <TbCurrencyTaka size={14} /> {price} BDT
          </p>
        )}

        {location.pathname === "/bookedservice" ||
        location.pathname === "/bookedrequest" ? (
          ""
        ) : (
          <Link to={`/details/${_id}`}>
            <button className="btn btn-sm mt-2 text-sm bg-green-400 text-white">
              Details
            </button>
          </Link>
        )}

        {location.pathname === "/bookedservice" ? (
          <div className={`mt-1`}>
            <span
              className={`${
                service?.status === "Completed"
                  ? `text-green-500 border-green-500 bg-green-100`
                  : `${
                      service?.status === "Working"
                        ? `text-red-500 border-red-500 bg-red-100`
                        : `text-yellow-600 border-yellow-600 bg-yellow-50`
                    }`
              }  font-semibold text-xs py-1 px-2 border-2 rounded-xl `}
            >
              {service?.status}
            </span>
          </div>
        ) : (
          ""
        )}
        {
        location.pathname === "/" ? <div>
          <p className="mt-1 text-xs text-red-500 ">Total booked: {service?.bid}</p>
        </div> :""
      }
      </div>
      {location.pathname === "/manageservice" ? (
        <div className="mt-5 md:mt-0 flex gap-3 md:space-x-4 pr-5">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline rounded-full"
          >
            {" "}
            <MdDeleteForever size={18} />
          </button>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-outline rounded-full">
              <FaRegEdit size={18} />
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
      
    </div>
  );
};

export default ServiceCard;
