import React from "react";
import { easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-base-200 pb-10 min-h-96">
      <div className="hero-content   items-center flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            Latest{" "}
            <motion.span
              animate={{ color: ["#00b42d", "#a30029", "#009ac0"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Service
            </motion.span>{" "}
            Available!
          </h1>
          <p className="py-6">
            We aim to provide you with the tools and strategies needed to excel
            in today’s digital landscape. From cutting-edge design to seamless
            user experiences, our services are crafted to suit your unique
            goals. Let us help you transform your ideas into reality and guide
            you toward online success.
          </p>
          <Link to="/services">
          <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
        <div className="flex-1 ">
          <motion.img
            src="./image/m9.jpg"
            animate={{ y: [50, 95, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-80 h-48 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
          <motion.img
            src="./image/m8.jpg"
            animate={{ x: [100, 145, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            className="max-w-sm w-80 h-48 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
