import React, { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import useInstructor from "../../../Hook/useInstructor";
import PopularClassCard from "../PopularClass/PopularClassCard/PopularClassCard";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructor = () => {
   const [users, loader] = useInstructor();
   console.log(users);

   return (
      <div>
         <Title
            heading={"Our popular instructor"}
            subHeading={
               "You can explore about our special and popular instructor"
            }></Title>

         <div className="w-[90%] mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
            {users.slice(0, 6).map((user) => (
               <PopularInstructorCard
                  key={user._id}
                  user={user}></PopularInstructorCard>
            ))}
         </div>
      </div>
   );
};

export default PopularInstructor;
