import React, { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";

const PopularInstructor = () => {
   const [popular, setPopular] = useState([]);
   useEffect(() => {
      fetch("/classes.json")
         .then((res) => res.json())
         .then((data) => {
            setPopular(data);
            console.log(data);
         });
   }, []);

   return (
      <div>
         <Title
            heading={"Our popular instructor"}
            subHeading={
               "You can explore about our special and popular instructor"
            }></Title>
         <h2>{popular.length}</h2>
      </div>
   );
};

export default PopularInstructor;
