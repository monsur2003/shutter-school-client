import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
const router = createBrowserRouter([
   {
      path: "/",
      element: <Navbar></Navbar>,
   },
]);

export default router;
