import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
// import Card from "../../../Components/Card/Card";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <PopularClass></PopularClass>
         <PopularInstructor></PopularInstructor>
         <About></About>
      </div>
   );
};

export default Home;
