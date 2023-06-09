import React from "react";
import useClass from "../../../../Hook/useClass";

const MySelectedClass = () => {
   const [myClasses, refetch] = useClass();
   return (
      <div>
         <h2>My selected class {myClasses.length}</h2>
      </div>
   );
};

export default MySelectedClass;
