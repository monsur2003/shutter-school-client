import React from "react";
import { Helmet } from "react-helmet-async";

const DashBoard = () => {
   return (
      <div className="py-[76px]">
         <Helmet>
            <title>Shutter | dashboard</title>
         </Helmet>
         <div className="flex">
            <div className="w-[25%] bg-blue-400 h-[100vh]"></div>
            <div className="w-[70%] mx-auto">
               <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis nihil quasi assumenda fugit repudiandae nostrum
                  cupiditate? Aut ipsam assumenda quas!
               </h1>
            </div>
         </div>
      </div>
   );
};

export default DashBoard;
