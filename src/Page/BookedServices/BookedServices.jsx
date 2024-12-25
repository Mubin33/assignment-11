import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import Loading from "../../Components/Loading/Loading";
import ServiceCard from "../Services/ServiceCard";
import { AuthContext } from "../../Firebase/AuthProvider";
import UseAxiosSecure from "../../Firebase/UseAxiosSecure";
import Title from "../../Components/Title/Title";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import lottieVai from "../../assets/Animation - 1735114433916.json";

const BookedServices = () => {
  const axiosSecure = UseAxiosSecure();
  let { userInformation } = useContext(AuthContext);
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["allService"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `https://mubins-server-project.vercel.app/booked?email=${userInformation?.email}&type=bookedUser`,
        {
          withCredentials: true,
        }
      );
      return res.data; // Extract data here
    },
  });

  if (isLoading) {
    return <Loading />; // Handle loading state
  }

  if (isError) {
    return <p>Error: {error.message}</p>; // Handle error state
  }

  console.log(response);
  return (
    <>
      <Helmet>
        <title>Booked service || MNS-service</title>
      </Helmet>
      <Title
        title={"You Booked"}
        subtitle={
          "We understand the importance of your time and trust. Every service you book is meticulously managed to ensure a smooth and hassle-free experience. From confirmation to completion, our team works diligently to provide timely updates, excellent service quality, and unmatched satisfaction. Your journey with us begins here, and we are committed to exceeding your expectations every step of the way."
        }
      />
      {response.length === 0 ? (
        <div className="flex justify-center items-center ">
          <div style={{ width: "400px", height: "400px" }}>
            <Lottie animationData={lottieVai}></Lottie>
          </div>
          <h1 className="text-[4rem] font-bold">Empty </h1>
        </div>
      ) : (
        <div className="lg:grid grid-cols-2 gap-x-16 px-10">
          {response?.map((item) => (
            <ServiceCard key={item._id} service={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default BookedServices;
