import React, { useContext, useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { AuthContext } from "../../Firebase/AuthProvider";

const Register = () => {
  let { registerUser,SignInGoogle } = useContext(AuthContext);
  let [passCondition, setPassCondition] = useState(false)
  let navigate = useNavigate();
  let [showPass,setShowPass] = useState()

  const handelShow = () => {
    setShowPass(!showPass);
  };

  const handleForm = (e) => {
    e.preventDefault();
    let form = e.target;
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;
    let photo = form.photo.value;

    // let user = {name, email, password}
    // console.log(user)
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const minLength = 6;

    if (
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      password.length >= minLength
    ) {
      registerUser(email, password, name, photo)
        .then((result) => {
          console.log(result);
          navigate("/");
          setPassCondition(false)
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
      setPassCondition(true)
    } 

  };


  const googlePopup = () => {
    SignInGoogle()
      .then((result) => {
        navigate('/')
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Opps....!",
          text: " Something wrong", 
        }); 
      });
  };



  return (
    <div>
      <Helmet>
        <title>Register || MNS-service</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col  ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now...!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <div
                  onClick={handelShow}
                  className="absolute top-[360px]  cursor-pointer right-11"
                >
                  {showPass ? (
                    <FaRegEyeSlash size={20} />
                  ) : (
                    <FaRegEye size={20} />
                  )}
                </div>
                 <span className={`text-xs ${passCondition ? "text-red-600" : ""}  mt-2`}>Minimum 6 character with one uppercase and lowercase added</span>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-600 text-white">SignUp</button>
              </div>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
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

export default Register;

