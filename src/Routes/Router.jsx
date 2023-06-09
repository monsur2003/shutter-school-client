import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Homes/Home/Home";
import AllClass from "../Pages/DashBoard/AllClass/AllClass";
import DashBoard from "../Layout/Dashboard";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
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
         {
            path: "classes",
            element: <AllClasses></AllClasses>,
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
         {
            path: "dashboard/addclass",
            element: <AddClass></AddClass>,
         },
      ],
   },
]);

export default router;
