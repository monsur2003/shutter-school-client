import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const PopularInstructorCard = ({ user }) => {
   return (
      <Fade bottom duration={1500}>
         <div className="card card-side bg-base-100 shadow-xl">
            <figure>
               <img
                  className="w-[300px] h-[300px]"
                  src={user?.photoUrl}
                  alt="image"
               />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{user.name}</h2>
               <p>{user?.email}</p>
               <p>{user?.role}</p>
               <div className="card-actions justify-end">
                  <Link to="/classes">
                     <button className="btn btn-primary">seeClasses</button>
                  </Link>
               </div>
            </div>
         </div>
      </Fade>
   );
};

export default PopularInstructorCard;
