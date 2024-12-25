import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
    const {userInformation} = useContext(AuthContext) 
    const [bid, setBid] = useState(0)
    const [wrongPhoto, setWrongPhoto] = useState(false) 
    let navigate = useNavigate()

    let hr_email = userInformation?.email
    let hr_name = userInformation?.displayName
    let hr_photo = userInformation?.photoURL

    const handleForm=(e)=>{
        e.preventDefault()
 
         let form = e.target
         const photo = form.photo.value
         const name = form.name.value
         const city = form.city.value
         const price = form.price.value
         const country = form.country.value
         const description = form.description.value

         let info = {photo, bid, name, city, country, price, description, hr_email, hr_name, hr_photo}
 
         axios.post('https://mubins-server-project.vercel.app/service', info)
         .then(res => {
           Swal.fire({
             icon: "success",
             title: "WOW.....",
             text: "Service added successfully!", 
           });
           navigate('/services')
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
       



        if (!/^https?:\/\/.+\..+/.test(photo)) {
            setWrongPhoto(true)
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Submit the photo URL", 
            });
            return;
          }else{
            setWrongPhoto(false)
          }

        
    }


    return (
        <div>
          <Helmet>
          <title>Add service || MNS-service</title>
          </Helmet>
            <div className="hero bg-base-200 min-h-[650px]">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Add Services</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
      <form onSubmit={handleForm} className="card-body ">
        {/*  */}
        <div className='md:flex block md:space-x-16'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Photo{wrongPhoto && <span className="text-xs text-red-600">*Only photo URL*</span>}</span> 
          </label>
          <input type="url" placeholder="photo URL" name='photo' className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" placeholder="Service Name" name='name' className="input input-bordered"  required/>
        </div>
        </div>
        {/*  */}
        {/*  */}
        <div className='md:flex block md:space-x-16'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Area City</span>
          </label>
          <input type="text" placeholder="city name" name='city' className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Area country</span>
          </label>
          <input type="text" placeholder="country name" name='country' className="input input-bordered"  required/>
        </div>
        </div>
        {/*  */}
        {/*  */}
        <div className='md:flex block md:space-x-16'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="set price" name='price' className="input input-bordered"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="description"name='description' className="input input-bordered"  />
        </div>
        </div>
        {/*  */}
        <div className="form-control mt-6">
          <button className="btn bg-green-600 text-white">Add Service</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddService;