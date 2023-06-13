import React from "react";
import cover from "../../assets/banner/cover.jpg";
import "./Cover.css";

const Cover = ({ heading, title, image }) => {
   return (
      <div className="relative">
         <img
            src={image}
            className="w-[100%] bg-fixed bg-cover h-[70vh]"
            alt=""
         />
         <div className="absolute w-full h-[70vh] bg-gradient-to-r from-[#000000ee] to-[#000000a4]  top-0"></div>
         <div className=" absolute top-[30%]  right-[50%] text-center translate-x-1/2">
            <div className="border-blue-900 rounded-lg  border-b-2 border-r-2 p-3">
               <h3 className="text-5xl uppercase text-blue-600 w-[80%] mb-3 mx-auto font-bold">
                  {heading}
               </h3>
               <p className=" text-[16px] text-gray-400">{title}</p>
            </div>
         </div>
      </div>
   );
};

export default Cover;
