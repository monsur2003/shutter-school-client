import React, { useState } from "react";

import Title from "../../../Components/Title/Title";
import InstructorCard from "../InstructorCard";

import useInstructor from "../../../Hook/useInstructor";

const Instructor = () => {
   const [users, loader] = useInstructor();
   console.log(users);

   if (loader) {
      return (
         <div className="w-full h-[100vh] flex justify-center items-center">
            <span class="loader"></span>
         </div>
      );
   }

   return (
      <div>
         <div></div>
         <Title
            heading={"All Instructor list"}
            subHeading={"Meet Our Experienced Instructors"}></Title>

         <div className="w-[80%] mx-auto mb-6  grid md:grid-cols-2 gap-4">
            {users.map((user) => (
               <InstructorCard
                  key={user._id}
                  instructor={user}></InstructorCard>
            ))}
         </div>
      </div>
   );
};

export default Instructor;
