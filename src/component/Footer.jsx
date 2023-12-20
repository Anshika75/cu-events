import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import footerlogo from "../assets/logonav.png";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaYoutube,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col lg:flex-row z-50 absolute w-[90%] lg:w-[55%] bg-[#E2012D] py-7 font-extrabold font-maven text-white -translate-y-3/4 left-[50%] -translate-x-1/2 min-h-[140px] justify-between lg:px-12 lg:items-center px-2">
        <div className="">
          <p className="text-3xl font-oswald">MORE THAN 10K MEMBERS</p>
          <p className="text-3xl font-oswald mt-3 text-[#091022]">JOIN OUR GUILD!</p>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#091022] flex items-center justify-evenly text-white py-2 mt-3 rounded-tr-full w-[150px] hover:bg-[#121f2e]"
          >
            JOIN US
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <div className="bg-[#091022] lg:mt-[12%]">
        <div className="w-full px-3 mx-auto mt-60 lg:mt-0 py-12 pt-24 flex flex-col lg:px-16 lg:flex-row gap-4 text-gray-300">
          <div className="w-full lg:w-[60%]">
            <h1 className="w-full text-3xl text-[#E2012D]">
              <img
                src={footerlogo}
                alt=""
                className="w-[25%] h-[10%px]"
              />
            </h1>
            <p className="text-white text-[15px] font-maven mt-4 text-justify lg:mr-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad nihil expedita omnis inventore velit dolores debitis, architecto ratione mollitia saepe doloribus accusantium id
            </p>
            <div className="flex cursor-pointer my-8">
              <a href="https://www.youtube.com/@CAC-Podcast"><FaYoutube size={30} className="mr-4" /></a>
              <a href="https://www.instagram.com/cac.cuchd/"><FaInstagram size={30} className="mr-4" /></a>
              <a href="https://www.linkedin.com/in/cac-cu-academic-competitions-a9b4932a0/"><FaLinkedin size={30} className="mr-4" /></a>
              {/* <FaTwitterSquare size={30} className="mr-4" /> */}
              {/* <FaGithubSquare size={30} className="mr-4" /> */}
              {/* <FaDribbbleSquare size={30} /> */}
            </div>
          </div>
          <div className="w-full lg:w-[20%] mb-6 lg:mb-0">
            <h1 className="font-bold text-white text-xl my-2 font-oswald">
              QUICK <span className="text-[#E2102d]">LINKS</span>
            </h1>
            <ul className="font-maven cursor-pointer">
              <li className="py-2 text-sm hover:text-[#E2012D]">HOME</li>
              <li className="py-2 text-sm hover:text-[#E2012D]">NEWS</li>
              <li className="py-2 text-sm hover:text-[#E2012D]">EVENTS</li>
              <li className="py-2 text-sm hover:text-[#E2012D]">PARTNERS</li>
              <li className="py-2 text-sm hover:text-[#E2012D]">ACHIEVEMENTS</li>
            </ul>
          </div>
          <div className="w-full lg:w-[20%] mb-6 lg:mb-0 cursor-pointer">
            <h2 className="font-bold text-white font-oswald text-xl my-2">CONTACT</h2>
            <ul className="font-maven text-xl">
              <li className="py-3 text-sm flex items-center ">
                <FaPhone className="mr-2 text-xl" />
                (406) 555-0120
              </li>
              <li className="py-3 text-sm flex items-center">
                <IoMail className="mr-2 text-xl" /> support@cac-cuchd.in
              </li>
              <li className="py-3 text-sm flex items-center">
                <IoLocation className="mr-2 text-xl" /> Chandigarh University,
                NH-5 <br /> Chandigarh-Ludhiana Highway
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-[#E2012D] py-4 text-center text-white">
          COPYRIGHT CAC. ALL RIGHT RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
