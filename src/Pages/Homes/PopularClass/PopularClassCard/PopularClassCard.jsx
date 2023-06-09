import React from "react";

const PopularClassCard = ({ popular }) => {
   return (
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
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
               <div className="badge badge-outline">Fashion</div>
               <div className="badge badge-outline">Products</div>
            </div>
         </div>
      </div>
   );
};

export default PopularClassCard;
