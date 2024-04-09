import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingBanner = () => {

  return (
    <>
      <Swiper
        id={"home"}
        centeredSlides={true}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full h-[30vh] md:h-[60vh] lg:h-[100vh]"
      >
          
          <SwiperSlide className="relative w-full h-full flex flex-col swiper-slide2">
            <video loop muted autoPlay controls = '' className="w-full h-full object-cover">
              <source src="https://www.dropbox.com/scl/fi/j4dpes26gdbi4f6onia9z/Chandigarh-University-wishes-you-all-a-happy-Holi.mp4?rlkey=jwolitqncublfdt583pcm2f4e&dl=1" type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full flex flex-col swiper-slide1">
            <video loop muted autoPlay controls = '' className="w-full h-full object-cover">
              <source src="https://www.dropbox.com/scl/fi/ubss7ym21rnenwalbs9vj/CU-FEST-Back-with-Bang.mp4?rlkey=n1pqgc11irhz8c8d99ie3xxkf&dl=1" type="video/mp4" />
            </video>
          </SwiperSlide>
      </Swiper>
    </>
  );
};

export default LandingBanner;
