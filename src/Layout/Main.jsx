import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";

const Main = () => {
   return (
      <>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </>
   );
};

export default Main;
