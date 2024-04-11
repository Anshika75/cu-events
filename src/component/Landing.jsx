import React, { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase";

const LandingBanner = () => {
  const [bannerData, setBannerData] = useState([]);
  
  // Throttle Firestore requests
  const fetchBannerData = useMemo(() => {
    let timeout;
    return async () => {
      clearTimeout(timeout);
      timeout = setTimeout(async () => {
        try {
          const bannerCollection = await projectFirestore.collection('banner').get();
          const bannerData = bannerCollection.docs.map(doc => doc.data());
          setBannerData(bannerData);
        } catch (error) {
          console.error("Error fetching banner data:", error);
        }
      }, 500); // Throttle to prevent excessive requests
    };
  }, []);

  useEffect(() => {
    fetchBannerData();
  }, [fetchBannerData]);

  return (
    <>
      <Swiper
        id={"home"}
        centeredSlides={true}
        autoplay={{
          delay: 37000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full h-[30vh] md:h-[60vh] lg:h-[100vh]"
      >
           {bannerData.map((banner, index) => (
          <SwiperSlide key={index} className="relative w-full h-full flex flex-col swiper-slide1">
            {/* Lazy loading for videos */}
            <video loop muted autoPlay controls = '' className="w-full h-full object-cover" preload="none">
              <source src={banner.video} type="video/mp4" />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LandingBanner;
