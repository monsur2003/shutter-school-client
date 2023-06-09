import React, { useEffect, useState } from "react";

const PopularClass = () => {
   const [popularClass, setPopularClass] = useState([]);
   useEffect(() => {
      fetch("class.json")
         .then((res) => res.json())
         .then((data) => setPopularClass(data));
   }, []);
   return (
      <div>
         <h2 className="text-3xl font bold">{popularClass.length}</h2>
      </div>
   );
};

export default PopularClass;
