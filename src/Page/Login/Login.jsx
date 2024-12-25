import React, { useContext, useState } from "react"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../Firebase/AuthProvider";

const Login = () => {
    let {loginUser,SignInGoogle} = useContext(AuthContext)
    let location = useLocation()
    let navigate = useNavigate() 
    let [showPass, setShowPass] = useState(false) 



    const handelShow=()=>{
      setShowPass(!showPass)
    }

    const handleForm=(e)=>{
        e.preventDefault()
        let form = e.target 
        let email = form.email.value
        let password = form.password.value

        // let user = { email, password}
        // console.log(user)

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        



        loginUser(email, password)
        .then((result) => {
            console.log(result.user);
            const redirectPath = location.state?.from?.pathname || "/";
            navigate(redirectPath);  
            Toast.fire({
              icon: "success",
              title: "Signed in successfully"
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const googlePopup=()=>{
      SignInGoogle()
      .then((result)=>{
        navigate(location.state?.from?.pathname || "/")
      })
      .catch((error)=>{
        Swal.fire({
          icon: "error",
          title: "Opps....!",
          text: " Something wrong", 
        });
      })
    }

    
  return (
    <div>
      <Helmet>
      <title>Login || MNS-service</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col  ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now...!</h1> 
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <div onClick={handelShow} className="absolute top-12  cursor-pointer right-4">
                  {showPass ?  <FaRegEyeSlash size={20}/>: <FaRegEye size={20}/>}
                
                </div>
                <label className="label">
                  <p href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-600 text-white">Login</button>
              </div>
              <p>Create account? <Link to='/register'>Sign up</Link></p>
            </form>
          </div>
          {/*  */}
          <div className="mt-5 space-y-3">
            <div className=" :w-full mx-auto items-center flex space-x-2">
              <p className="border-2 w-full py-[1px] bg-black"></p>
              <p>or,</p>
              <p className="border-2 w-full py-[1px] bg-black"></p>
            </div>
            <div>
              <button onClick={googlePopup} className="btn btn-outline">
                <img
                  className="h-4 w-4"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                  alt=""
                />{" "}
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;