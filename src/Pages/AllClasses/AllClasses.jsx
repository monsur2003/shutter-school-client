import React, { useContext, useEffect, useState } from "react";
import AllClassesCard from "./AllClassesCard/AllClassesCard";
import { authContext } from "../../Providers/AuthProvider";

const AllClasses = () => {
   const { loader } = useContext(authContext);
   const [classes, setClasses] = useState([]);
   useEffect(() => {
      fetch("http://localhost:5000/classes")
         .then((res) => res.json())
         .then((data) => setClasses(data));
   }, []);

   if (loader) {
      return (
         <div className="w-full h-[100vh] flex justify-center items-center">
            <h2 className=" text-4xl font-bold animate-spin">Loading......</h2>
         </div>
      );
   }

   return (
      <div>
         <div>
            <h2>{classes.length}</h2>
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
