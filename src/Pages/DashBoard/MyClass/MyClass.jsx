import React from "react";
import useMyClasses from "../../../Hook/useMyClasses";

const MyClass = () => {
   const [myClasses] = useMyClasses();
   console.log(myClasses);
   return (
      <div>
         <h2>Here is my classes page {myClasses.length}</h2>
      </div>
   );
};

export default MyClass;
