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
import MyClass from "../Pages/DashBoard/MyClass/MyClass";
import ManageClass from "../Pages/DashBoard/Admin/ManageClass/ManageClass";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUsers/ManageUsers";
import MySelectedClass from "../Pages/DashBoard/Student/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Pages/DashBoard/Student/MyEnrolledClass/MyEnrolledClass";
import MyPayment from "../Pages/DashBoard/Student/MyPayment/MyPayment";
import Instructor from "../Pages/Instructors/Instructor/Instructor";
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
            path: "/instructor",
            element: <Instructor></Instructor>,
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
         {
            path: "dashboard/myclass",
            element: <MyClass></MyClass>,
         },
         {
            path: "dashboard/manageclass",
            element: <ManageClass></ManageClass>,
         },
         {
            path: "dashboard/manageuser",
            element: <ManageUsers></ManageUsers>,
         },
         {
            path: "dashboard/selectedclass",
            element: <MySelectedClass></MySelectedClass>,
         },
         {
            path: "dashboard/enrolledclass",
            element: <MyEnrolledClass></MyEnrolledClass>,
         },
         {
            path: "dashboard/mypayment",
            element: <MyPayment></MyPayment>,
         },
      ],
   },
]);

export default router;
