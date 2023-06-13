import React from "react";

import Fade from "react-reveal/Fade";
const InstructorCard = ({ instructor }) => {
   return (
      <Fade top duration={1200}>
         <div className=" w-full h-[300px] rounded-lg border-blue-600  items-center border-2 p-5 flex shadow-xl">
            <figure>
               <img
                  className="w-[200px] rounded-full h-[200px]"
                  src={instructor?.photoUrl}
                  alt="Shoes"
               />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{instructor?.name}</h2>
               <p>{instructor?.email}</p>
            </div>
         </div>
      </Fade>
   );
};

export default InstructorCard;
