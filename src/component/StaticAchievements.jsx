import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import tri from "../assets/tri.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';
import { projectFirestore } from "../firebase";
const ModuleBox = ({ onClose, Name, Description, Image, Link }) => {
  const redirectToEvent = () => {
    // Redirect to the specified Link
    window.location.href = Link;
  };

  const limitDescription = (description, limit) => {
    const words = description.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    } else {
      return description;
    }
  };

  const limitedDescription = limitDescription(Description, 80);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#060414de] shadow-lg shadow-[#ffffff17] z-20 grid place-items-center w-[90%] h-[95%] lg:h-[90%]">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between px-7 py-7 lg:px-28">
        <button
          onClick={onClose}
          className="absolute top-4 lg:top-6 lg:text-4xl right-2 lg:right-6 text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>
        <div className="flex flex-col w-full lg:w-1/2 pt-4">
          <h1 className='text-white text-3xl lg:text-5xl font-bold font-oswald lg:leading-[3.75rem]'>{Name}</h1>
          <p className="text-sm mt-2 py-4 lg:mt-0 lg:text-lg lg:py-6 text-justify w-full leading-6 lg:leading-8 font-maven text-white">
          {limitedDescription}
          </p>
          <button onClick={redirectToEvent} className="bg-[#E2012D] text-white py-2 w-[65%] lg:w-[45%] flex justify-evenly items-center rounded-tr-full hover:bg-white hover:text-[#E2012D] transition-all duration-300 ease-in-out cursor-pointer font-oswald text-xl uppercase tracking-widest"> View&nbsp; &nbsp; <FaLongArrowAltRight /> </button>
        </div>
        <div className="w-full hidden lg:block h-[180px] mb-2 lg:mb-0 lg:w-[470px] lg:h-[380px] rounded-tl-[80px] overflow-hidden">
          <img src={Image} className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};


const StaticAchievements = () => {
  const [achivData, setAchivData] = useState([]);
  const [isBoxOpen, setBoxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const fetchAchivData = async () => {
      try {
        const achievementsCollection = await projectFirestore.collection('achievement').get();
        const achivData = achievementsCollection.docs.map(doc => doc.data());
        setAchivData(achivData);
      } catch (error) {
        console.error('Error fetching achievements:', error);
      }
    };

    fetchAchivData();
  }, []);

  const openBox = (index) => {
    setBoxOpen(true);
    setCurrentIndex(index);
  };

  const closeBox = () => {
    setBoxOpen(false);
  };

  return (
    <>
      <div id={"sachievements"} className="h-full w-full bg-[#091022] px-4 lg:px-0 pt-16 relative">
        <img src={tri} alt="" className='absolute top-0 left-[50%] -translate-x-1/2' />
        <h1 className='text-[#dddddd] text-4xl lg:text-6xl font-bold text-cente font-oswald text-center mb-4'>OUR <span className='text-[#E2012D]'>FEATS</span></h1>
        <div className='text-[#E2012D] text-4xl flex justify-center items-center'><MdKeyboardDoubleArrowDown /></div>

        <div className="box hidden lg:block">
          <Swiper
            slidesPerView={3}
          spaceBetween={30}
          centeredSlides={achivData.length > 3}
          pagination={{
            clickable: achivData.length > 3,
          }}
          navigation={achivData.length > 3}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={achivData.length > 3}
            className="mySwiper px-20 mt-12"
          >
            {achivData.map((achiv, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-[400px] h-[400px] grid place-items-center shadow-lg cursor-pointer transition-all hover:scale-105 hover:shadow-2xl">
                  <img
                    src={achiv.Image}
                    onClick={() => openBox(index)}
                    className="absolute top-0 left-0 object-cover"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="box flex justify-center items-center lg:hidden">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={100}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper flex justify-center items-center mt-12"
          >
            {achivData.map((achiv, index) => (
              <SwiperSlide className='flex justify-center items-center ' key={index}>
                <div className="relative w-[280px] h-[350px] grid place-items-center shadow-lg cursor-pointer transition-all hover:shadow-2xl">
                  <img
                    src={achiv.Image}
                    onClick={() => openBox(index)}
                    className="absolute top-0 left-0 object-cover"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {isBoxOpen && <ModuleBox onClose={closeBox} {...achivData[currentIndex]} />}

        <div className="w-full border-b-4 border-red-600 overflow-y-hidden mt-28"></div>
      </div>
    </>
  );
}

export default StaticAchievements;
