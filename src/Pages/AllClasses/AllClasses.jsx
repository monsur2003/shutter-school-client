import React, { useContext, useEffect, useState } from "react";
import AllClassesCard from "./AllClassesCard/AllClassesCard";
import { authContext } from "../../Providers/AuthProvider";
import classesImage from "../../assets/banner/banner.jpg";
import Cover from "../../Components/Cover/Cover";
import useAllClasses from "../../Hook/useAllClasses";
import Title from "../../Components/Title/Title";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {
   const { loader } = useContext(authContext);
   const [classes] = useAllClasses();

   const approvedClasses = classes.filter((cls) => cls.status === "approved");

   return (
      <div>
         <div>
            <Helmet>
               <title>Shutter | AllClasses</title>
            </Helmet>
            <Cover
               image={classesImage}
               heading={"Featured Classes for You"}
               title={
                  "Embark on a Learning Journey with our Top Classes and select your chosen classes we will recommend for you to learn more about them we focused on photography and training"
               }></Cover>
            <Title
               heading={"Classes for You"}
               subHeading={
                  "Explore our all classes for improve performance and improve more skills on photography"
               }></Title>
         </div>
         <div className="w-[90%] mb-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {approvedClasses.map((singleClass) => (
               <AllClassesCard
                  key={singleClass._id}
                  singleClass={singleClass}></AllClassesCard>
            ))}
         </div>
      </div>
   );
};

export default AllClasses;
