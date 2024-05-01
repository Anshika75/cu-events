import React from "react";
import about from "../assets/about.png";
import tri from "../assets/tri.png";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const About = () => {
  return (
    <div id={"about"} className=" w-full container h-full mx-auto pt-16 pb-20 bg-[#091022] text-white font-maven relative">
      <img src={tri} alt="" className='absolute top-0 left-[50%] -translate-x-1/2' />
      <h1 className='text-[#dddddd] text-4xl lg:text-6xl font-bold text-cente font-oswald text-center mb-4'>ABOUT <span className='text-[#E2012D]'>CAC</span></h1>
      <div className='text-[#E2012D] text-4xl flex justify-center items-center'><MdKeyboardDoubleArrowDown /></div>
      <div className="flex flex-row items-center justify-center w-full relative mt-6 lg:mt-20 h-full">
        <img src={about} alt="" className="h-[90vh] w-1/2 hidden lg:block" />
        <div className="grid place-items-center px-2 rounded-lg w-[90%] lg:w-[60%] lg:-ml-[20%] bg-[#000000d4]">
          <p className="hidden lg:grid place-items-centertext-lg lg:text-xl py-8 text-justify w-full px-7 leading-8 lg:px-12 text-white opacity-80 font-maven z-20">
            Chandigarh University Academic Competitions, where innovation converges with education to create an unparalleled academic spectacle. Our team is a dynamic collective of visionaries, strategists, and go-getters who are dedicated to orchestrate events that transcend conventional boundaries. We are an ensemble of dedicated professionals, passionate about creating transformative experiences through hackathons, workshops, and various academic events
            <br />
            <br />
            Welcome to CAC, the pulse of academic vibrancy at Chandigarh University. We're dedicated to inspiring and empowering through diverse academic competitions, hackathons, and workshops. Our inclusive community values every voice, fostering an environment where curiosity thrives.
            CAC is more than events; it's a collaborative space, connecting students, faculty, and industry experts. Behind our seamless experiences is a committed team pushing the boundaries of academic engagement. Whether you're a student showcasing skills or an industry expert contributing, CAC invites you to join our journey of exploration and innovation. Welcome to a legacy of academic excellence at CAC.

          </p>
          <p className="text-sm lg:text-xl lg:hidden py-8 text-justify w-full px-7 leading-8 lg:px-12 text-white opacity-80 font-maven z-20">
            Chandigarh University Academic Competitions, where innovation converges with education to create an unparalleled academic spectacle. Our team is a dynamic collective of visionaries, strategists, and go-getters who are dedicated to orchestrate events that transcend conventional boundaries. We are an ensemble of dedicated professionals, passionate about creating transformative experiences through hackathons, workshops, and various academic events
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
