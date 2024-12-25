import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase/AuthProvider";
import { FaAngleDoubleDown } from "react-icons/fa";

const Navbar = () => {
  let { userInformation, signoutUser } = useContext(AuthContext);
  console.log(userInformation);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6", 
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout!",
          text: "Your account is signout .",
          icon: "warning",
        });
        signoutUser()
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  let userName = userInformation?.email.charAt(0).toUpperCase();

  const navServices = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-green-400 py-3 px-4 font-semibold rounded-lg text-white"
              : "py-3 px-4 font-semibold rounded-lg text-green-600"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-green-400 py-3 px-4 font-semibold rounded-lg text-white"
              : "py-3 px-4 font-semibold rounded-lg text-green-600"
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>
      {/*  */}
      <div className="dropdown dropdown-bottom  ">
        <div
          tabIndex={0}
          role="button"
          className="py-3 px-4 flex items-center gap-1 font-semibold rounded-lg text-green-600 "
          onClick={toggleDropdown}
          onKeyPress={(e) => {
            if (e.key === "Enter") toggleDropdown();
          }}
        >
          Dashboard<FaAngleDoubleDown />
        </div>
        {isOpen && (
          <ul
            tabIndex={0}
            className="dropdown-content ml-10 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-green-400 py-3 px-4 font-semibold rounded-lg text-white"
                    : "py-3 px-4 font-semibold rounded-lg text-green-600"
                }
                to="/addservice"
              >
                Add Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-green-400 py-3 px-4 font-semibold rounded-lg text-white"
                    : "py-3 px-4 font-semibold rounded-lg text-green-600"
                }
                to="/manageservice"
              >
                Manage Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-green-400 py-3 px-4 font-semibold rounded-lg text-white"
                    : "py-3 px-4 font-semibold rounded-lg text-green-600"
                }
                to="/bookedservice"
              >
                Booked Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-green-400 py-3 px-4 font-semibold rounded-lg text-white"
                    : "py-3 px-4 font-semibold rounded-lg text-green-600"
                }
                to="/bookedrequest"
              >
                Service-To-Do
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 border-b-2 border-green-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm z-10 dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow"
            >
              {navServices}
            </ul>
          </div>
          <Link to="/">
            <h1 className="btn btn-ghost text-xl">🚀MNS-service</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navServices}</ul>
        </div>
        <div className="navbar-end">
          {userInformation ? (
            <p onClick={handleLogout} className="btn hidden md:flex">
            Logout
          </p>
          ) : (
            <div className="flex space-x-2">
              <Link to="/login">
                {" "}
                <p className="btn  md:flex">Login</p>{" "}
              </Link>
              <Link to="/register">
                {" "}
                <p className="btn hidden bg-green-400 text-white md:flex">
                  Sign up
                </p>{" "}
              </Link>
            </div>
          )}

          {/*  */}

          {userInformation && (
            <div className="relative inline-block group">
              {/* <img
              className="md:h-12 md:w-12 w-10 h-10 rounded-full border-2 border-white"
              src={userInformation?.photoURL}
              alt=""
            />
            <span className="absolute z-10 left-1/2 transform -translate-x-2/3 mt-2 w-auto px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {userInformation?.displayName || "User"}
            </span> */}

              <div className="dropdown z-10 dropdown-end">
                {/*  */}
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-9 md:w-11 md:p-1 bg-white rounded-full">
                    { !/^https?:\/\/.+\..+/.test(userInformation?.photoURL) ? (
                      <div>
                        <p style={{ fontSize: '2rem',  borderRadius:"50%", width:'40px',display:'flex', justifyContent:"center", alignItems:"center", height:'40px', backgroundColor:"skyblue", fontWeight: 'bold' }} classname=" w-full h-full">
                          {userName}
                        </p>
                      </div>
                    ) : (
                      <>
                        <img
                          alt=""
                          className="text-xl"
                          src={userInformation?.photoURL}
                        />
                      </>
                    )}
                    {/* <img alt="profile image" src={userInformation?.photoURL} /> */}
                    <span className="absolute z-10 left-1/2 transform -translate-x-2/3 mt-2 w-auto px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {userInformation?.displayName || "User"}
                    </span>
                  </div>
                </div>
                {/*  */}
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    {userInformation ? (
                      <p onClick={handleLogout} className="btn">
                        Logout
                      </p>
                    ) : (
                      <p className="btn    md:flex">
                        <Link to="/login">Login</Link>
                      </p>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
