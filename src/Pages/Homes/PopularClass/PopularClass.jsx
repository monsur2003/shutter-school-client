import React, { useContext, useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard/PopularClassCard";
import Title from "../../../Components/Title/Title";
import { authContext } from "../../../Providers/AuthProvider";

const PopularClass = () => {
   const [popularClass, setPopularClass] = useState([]);
   const { loader } = useContext(authContext);
   console.log(popularClass);

   useEffect(() => {
      fetch("http://localhost:5000/classes")
         .then((res) => res.json())
         .then((data) => {
            const approvedClass = data.filter((d) => d.status == "approved");
            const sortedClasses = approvedClass
               .sort((a, b) => b.enrolled - a.enrolled)
               .slice(0, 6);
            setPopularClass(sortedClasses);
         });
   }, []);

   return (
      <div className="my-8 mt-[100px]">
         <div>
            <Title
               heading={"popular classes"}
               subHeading={"Discover the Most Enrolled Courses"}></Title>
         </div>
         <div className="w-[90%] mx-auto  grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {popularClass.map((popular, index) => (
               <PopularClassCard
                  key={index}
                  popular={popular}></PopularClassCard>
            ))}
         </div>
      </div>
   );
};

export default PopularClass;
