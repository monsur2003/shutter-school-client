import React from "react";

const BannerTitle = ({ heading, subHeading }) => {
   return (
      <>
         <div className="absolute md:w-full  text-center  md:text-start flex md:pl-8 items-center bg-gradient-to-r from-[#000000f8] to-[#00000062] bottom-0 top-0">
            <div className="md:w-[60%] w-[80%] mx-auto md:mx-0 md:space-y-7 md:pl-11">
               <h2 className="md:text-6xl text-[20px] font-bold text-white">
                  {heading}
               </h2>
               <p className="text-gray-300 text-sm md:text-[18px]">
                  {subHeading}
               </p>
               <div>
                  <button className="btn mr-5 md:btn-md btn-sm btn-primary">
                     Contact us
                  </button>
                  <button className="btn btn-primary md:btn-md btn-sm btn-outline">
                     Latest More
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default BannerTitle;
