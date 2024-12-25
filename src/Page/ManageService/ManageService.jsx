import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import ServiceCard from "../Services/ServiceCard";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Title from "../../Components/Title/Title";
import UseAxiosSecure from "../../Firebase/UseAxiosSecure";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import lottieVai from "../../assets/Animation - 1735114433916.json";

const ManageService = () => {
  let { userInformation } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();

  const {
    data: postedService,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["allService"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `https://mubins-server-project.vercel.app/service?email=${userInformation?.email}`,
        { withCredentials: true }
      );
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error: {error.message}</p>; // Handle error state
  }

  // useEffect(()=>{
  //     axios.get(`https://mubins-server-project.vercel.app/service?email=${userInformation?.email}` )
  //     .then(res =>{
  //         setPostedService(res.data)
  //     })
  // },[ userInformation?.email])

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://mubins-server-project.vercel.app/service/${id}`)
          .then((res) => {
            navigate("/");
          })
          .catch((error) => {
            Swal.fire({
              title: "Opps!!",
              text: "Something want wrong",
              icon: "error",
            });
          });
        Swal.fire({
          title: "Booked!",
          text: "Your request is pending.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Manage service || MNS-service</title>
      </Helmet>
      <Title
        title={"Manage Services"}
        subtitle={
          "Streamline your workflow and enhance productivity with our comprehensive management services. We provide tailored solutions to help you oversee projects, monitor performance, and ensure that every aspect of your business runs smoothly. From handling day-to-day tasks to strategic planning, our expertise allows you to focus on growth while we take care of the details."
        }
      />
      <div className="my-20 px-5  md:px-16">
        {postedService.length === 0 ? (
          <div className="flex justify-center items-center ">
            <div style={{ width: "400px", height: "400px" }}>
              <Lottie animationData={lottieVai}></Lottie>
            </div>
            <h1 className="text-[4rem] font-bold">Empty </h1>
          </div>
        ) : (
          <div>
            {postedService?.map((item) => (
              <ServiceCard
                key={item._id}
                handleDelete={handleDelete}
                service={item}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ManageService;
