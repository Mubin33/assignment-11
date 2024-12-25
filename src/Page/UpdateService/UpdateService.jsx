import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const UpdateService = () => {
  const data = useLoaderData(); 
  let navigate = useNavigate()


  const handleForm = (e) => {
    e.preventDefault();


    let form = e.target
    let uPhoto = form.photo.value || data?.photo
    let uName = form.name.value || data?.name
    let uCity = form.city.value || data?.city
    let uCountry = form.country.value || data?.country
    let uPrice = form.price.value || data?.price
    let uDescription = form.description.value || data?.description 

    let updateInfo ={uPhoto, uName, uCity, uCountry, uPrice, uDescription}
    axios.put(`https://mubins-server-project.vercel.app/service/${data?._id}`, updateInfo)
    .then(res => {
               Swal.fire({
                 icon: "success",
                 title: "WOW.....",
                 text: "Service added successfully!", 
               });
               navigate('/manageservice')
               console.log(res.data); // Logs the response from the server
             })
             .catch(error => {
               Swal.fire({
                 icon: "error",
                 title: "Oops...",
                 text: "Something went wrong!", 
               });
               console.error(error); // Logs the error if the request fails
             });

  };
  return (
    <div>
      <Helmet>
      <title>{data?.name}-info update || MNS-service</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-[650px]">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Update "<span className="text-green-500">{data?.name}</span>" Service information</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <form onSubmit={handleForm} className="card-body ">
              {/*  */}
              <div className="md:flex block md:space-x-16">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Photo</span>
                  </label>
                  <input
                    type="url"
                    placeholder="photo URL"
                    name="photo"
                    defaultValue={data?.photo}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Service Name"
                    name="name"
                    defaultValue={data?.name}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="md:flex block md:space-x-16">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Area City</span>
                  </label>
                  <input
                    type="text"
                    placeholder="city name"
                    name="city"
                    defaultValue={data?.city}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Area country</span>
                  </label>
                  <input
                    type="text"
                    placeholder="country name"
                    name="country"
                    defaultValue={data?.country}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="md:flex block md:space-x-16">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="set price"
                    name="price"
                    defaultValue={data?.price}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="description"
                    name="description"
                    defaultValue={data?.description}
                    className="input input-bordered"
                  />
                </div>
              </div>
              {/*  */}
              <div className="form-control mt-6">
                <button className="btn bg-green-600 text-white">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
