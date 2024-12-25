import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-300 text-base-content p-10">
        <nav>
          <Link to="/">
            <h1 className="text-black my-3 text-xl md:text-3xl font-bold md:font-semibold">
              🚀MNS-service
            </h1>
          </Link>
          <h6 className="footer-title">Services</h6>
          <Link to="/login" className="link link-hover">
            Login
          </Link>
          <Link to="/register" className="link link-hover">
            Register
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link to="https://www.linkedin.com/in/md-yasin-arafat-mubin-33a913237/">
              <FaLinkedin size={30} />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=61566957151512">
              <FaFacebookSquare size={30} />
            </Link>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/services" className="link link-hover">
            Service
          </Link>
          <Link to="/addservice" className="link link-hover">
            Add service
          </Link>
          <Link to="/manageservice" className="link link-hover">
            Manage service
          </Link>
          <Link to="/bookedservice" className="link link-hover">
            Booked service
          </Link>
          <Link to="/bookedrequest" className="link link-hover">
            Service to do
          </Link>
        </nav>
      </footer>
      <div className="footer footer-center bg-base-300 text-base-content rounded p-10">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
