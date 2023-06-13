import React from "react";
import Fade from "react-reveal/Fade";

const PopularClassCard = ({ popular }) => {
   console.log(popular);
   return (
      <Fade top distance="20%" duration={1500}>
         <div className="card w-[350px] gap-x-4 bg-white text-gray-900  shadow-xl">
            <figure>
               <img
                  src={popular?.image}
                  className="h-[200px] w-full"
                  alt="Shoes"
               />
            </figure>
            <div className="card-body">
               <h2 className="card-title">
                  {popular?.name}
                  <div className="badge badge-secondary">Popular</div>
               </h2>

               <div className="card-actions justify-end">
                  <p className="text-[18px]">Price: $ {popular.price}</p>
                  <p className="text-[18px]">Enrolled: {popular.enrolled}</p>
               </div>
            </div>
         </div>
      </Fade>
   );
};

export default PopularClassCard;
