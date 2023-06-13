import React, { useState } from "react";

import Title from "../../../Components/Title/Title";
import InstructorCard from "../InstructorCard";
import coverImage from "../../../assets/banner/cover.jpg";

import useInstructor from "../../../Hook/useInstructor";
import Cover from "../../../Components/Cover/Cover";
import { Helmet } from "react-helmet-async";

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
         <div>
            <Helmet>
               <title>Shutter | Instructor page</title>
            </Helmet>
            <Cover
               image={coverImage}
               heading={"Meet our senior instructor"}
               title={
                  "Lead instructors are responsible for leading specific classes or programs. They possess a deep understanding of the subject matter and excel in delivering engaging and"
               }></Cover>
         </div>
         <Title
            heading={"All Instructor list"}
            subHeading={"Meet Our Experienced Instructors"}></Title>

         <div className="w-[90%] mx-auto mb-6  grid md:grid-cols-2 gap-4">
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
