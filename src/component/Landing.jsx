import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
import { projectFirestore } from "../firebase";
import slide3 from "../assets/slide3.png";
import { Link } from "react-router-dom";

const LandingBanner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const bannerCollection = await projectFirestore.collection('banner').get();
        const bannerData = bannerCollection.docs.map(doc => doc.data());
        setBannerData(bannerData);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBannerData();
  }, []);

  return (
    <>
      <Swiper
        id={"home"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full h-[30vh] md:h-[60vh] lg:h-[100vh]"
      >

        {/* <SwiperSlide className="relative w-full h-full flex flex-col swiper-slide1">
          <Link to="/hackentine" className="cursor-pointer w-full h-full absolute top-0 left-0 z-20"></Link>
          <img className="w-full h-full object-cover" src={slide3} alt="" />
        </SwiperSlide> */}

        {bannerData.map((banner, index) => (
          <SwiperSlide key={index} className="relative w-full h-full flex flex-col swiper-slide1">
            <a href={banner.Link} target="_blank" className="cursor-pointer w-full h-full absolute top-0 left-0 z-20"></a>
            <img className="w-full h-full object-cover" src={banner.Image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default LandingBanner;