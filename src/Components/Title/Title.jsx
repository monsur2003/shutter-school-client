import React from "react";

const Title = ({ subHeading, heading }) => {
   return (
      <div className="text-center my-10 border-t-2 py-3 md:rounded-lg  border-blue-200 border-b-2 md:w-4/12 mx-auto">
         <p className="text-blue-500 mb-2 font-semibold">
            {" "}
            ---{subHeading}---{" "}
         </p>

         <h2 className="text-4xl font-bold  uppercase  ">{heading}</h2>
      </div>
   );
};

export default Title;
