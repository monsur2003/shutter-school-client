import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Main from "../Layout/Main";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "dashboard",
            element: <DashBoard></DashBoard>,
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
]);

export default router;
