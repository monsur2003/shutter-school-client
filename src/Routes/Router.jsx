import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Homes/Home/Home";
import AllClass from "../Pages/DashBoard/AllClass/AllClass";
import DashBoard from "../Layout/Dashboard";
const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },

         {
            path: "login",
            element: <Login></Login>,
         },
         {
            path: "register",
            element: <Register></Register>,
         },
      ],
   },
   {
      path: "/dashboard",
      element: <DashBoard></DashBoard>,
      children: [
         {
            path: "dashboard/allclass",
            element: <AllClass></AllClass>,
         },
      ],
   },
]);

export default router;
