import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
   return (
      <>
         <Navbar></Navbar>
         <Outlet></Outlet>
      </>
   );
};

export default Main;
