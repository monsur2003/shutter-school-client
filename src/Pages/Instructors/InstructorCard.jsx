import React from "react";

const InstructorCard = ({ instructor }) => {
   return (
      <div>
         <div className=" w-full h-[300px] rounded-lg  items-center bg-blue-400 p-5 flex shadow-xl">
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
      </div>
   );
};

export default InstructorCard;
