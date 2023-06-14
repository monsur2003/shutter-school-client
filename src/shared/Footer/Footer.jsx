import React from "react";
import { Fade } from "react-reveal";
import "./Foote.css";
import logo from "../../assets/banner/logo (3).png";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
   return (
      <div className="bg-[#080871]">
         <div className=" w-[90%] mx-auto grid grid-cols-1 md:grid-cols-5 p-10">
            <div className="md:text-start text-center">
               <span className=" text-2xl md:text-start text-center font-bold tracking-wide text-gray-300 ">
                  Services
               </span>
               <div className="flex flex-col">
                  <a className=" text-gray-400 mb-2 md:text-start text-center">
                     Branding
                  </a>
                  <a className=" text-gray-400 mb-2 md:text-start text-center">
                     Design
                  </a>
                  <a className=" text-gray-400 mb-2 md:text-start text-center">
                     Marketing
                  </a>
                  <a className=" text-gray-400 mb-2 md:text-start text-center">
                     Advertisement
                  </a>
               </div>
            </div>
            <div className="md:text-start text-center">
               <span className=" md:text-start tracking-wide text-gray-300 text-center text-2xl font-bold">
                  Company
               </span>
               <div className=" text-center md:text-start flex flex-col ">
                  <a className="text-gray-400 mb-2  md:text-start">About us</a>
                  <a className="text-gray-400 mb-2  md:text-start">Contact</a>
                  <a className="text-gray-400 mb-2  md:text-start">Jobs</a>
                  <a className="text-gray-400 mb-2  md:text-start">Press kit</a>
               </div>
            </div>
            <div className="text-center md:text-start">
               <span className=" md:text-start text-center text-gray-300 font-bold text-2xl tracking-wide">
                  Legal
               </span>
               <div className="flex flex-col">
                  <a className="text-gray-400 mb-2  md:text-start">
                     Terms of use
                  </a>
                  <a className="text-gray-400 mb-2  md:text-start">
                     Privacy policy
                  </a>
                  <a className="text-gray-400 mb-2  md:text-start">
                     Cookie policy
                  </a>
               </div>
            </div>
            <div>
               <h2 className="text-2xl font-bold text-gray-300 tracking-wide">
                  Send Mail
               </h2>
               <div className="flex mt-3">
                  <input
                     type="text"
                     className="input input-secondary border-none rounded-l-lg rounded-none"
                  />
                  <button className="btn btn-secondary rounded-none rounded-r-lg">
                     Send
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
