import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Slider = () => {
  return (
    <div className="md:flex lg:space-x-28   lg:px-24">
      <div className="lg:px-0 px-5">
        <h1 className="md:text-7xl text-4xl text-center md:text-start font-semibold lg:mt-40">Your Solution, One Stop Here <br/>"<span className="text-red-600">MNS-service</span>"</h1>
        <p className="text-xs font-semibold my-5">Step into the world of movies and experience storytelling like never before. From action-packed blockbusters to heartfelt indie gems</p>
      </div>
    <div className="h-[650px] w-full  md:w-[450px]">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/image/s3.jpg" alt="slider image" />
          
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/s2.jpg" alt="slider image" />
          
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/s1.jpg" alt="slider image" />
          
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/s4.jpg" alt="slider image" />
         
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/s5.jpg" alt="slider image" />
         
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/s3.jpg" alt="slider image" />
          
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/s2.jpg" alt="slider image" />
          
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default Slider;

 