import React, { useContext, useEffect, useState } from "react";
import AllClassesCard from "./AllClassesCard/AllClassesCard";
import { authContext } from "../../Providers/AuthProvider";
import classesImage from "../../assets/banner/banner.jpg";
import Cover from "../../Components/Cover/Cover";

const AllClasses = () => {
   const { loader } = useContext(authContext);
   const [classes, setClasses] = useState([]);
   useEffect(() => {
      fetch("http://localhost:5000/classes")
         .then((res) => res.json())
         .then((data) => {
            setClasses(data);
         });
   }, []);

   return (
      <div>
         <div>
            <Cover
               image={classesImage}
               heading={"Featured Classes for You"}
               title={
                  "Embark on a Learning Journey with our Top Classes and select your chosen classes we will recommend for you to learn more about them we focused on photography and training"
               }></Cover>
         </div>
         <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            {classes.map((singleClass) => (
               <AllClassesCard
                  key={singleClass._id}
                  singleClass={singleClass}></AllClassesCard>
            ))}
         </div>
      </div>
   );
};

export default AllClasses;
