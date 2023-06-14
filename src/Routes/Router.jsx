import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Homes/Home/Home";

import DashBoard from "../Layout/Dashboard";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import MyClass from "../Pages/DashBoard/MyClass/MyClass";
import ManageClass from "../Pages/DashBoard/Admin/ManageClass/ManageClass";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUsers/ManageUsers";
import MySelectedClass from "../Pages/DashBoard/Student/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Pages/DashBoard/Student/MyEnrolledClass/MyEnrolledClass";
import Instructor from "../Pages/Instructors/Instructor/Instructor";
import PrivateRoute from "./PrivateRoute";
import DashBoardHome from "../Pages/DashBoard/DashBoardHome/DashBoardHome";
import MyPayment from "../Pages/DashBoard/Student/MyPayment/MyPayment";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Error from "../Error/Error";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/instructor",
            element: (
               <PrivateRoute>
                  <Instructor></Instructor>
               </PrivateRoute>
            ),
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
      element: (
         <PrivateRoute>
            <DashBoard></DashBoard>
         </PrivateRoute>
      ),
      errorElement: <Error></Error>,
      children: [
         {
            path: "/dashboard",
            element: <DashBoardHome></DashBoardHome>,
         },
         {
            path: "addclass",
            element: (
               <InstructorRoute>
                  <AddClass></AddClass>
               </InstructorRoute>
            ),
         },
         {
            path: "myclass",
            element: (
               <InstructorRoute>
                  <MyClass></MyClass>
               </InstructorRoute>
            ),
         },
         {
            path: "manageclass",
            element: (
               <AdminRoute>
                  <ManageClass></ManageClass>
               </AdminRoute>
            ),
         },
         {
            path: "manageuser",
            element: (
               <AdminRoute>
                  <ManageUsers></ManageUsers>
               </AdminRoute>
            ),
         },
         {
            path: "selectedclass",
            element: <MySelectedClass></MySelectedClass>,
         },

         {
            path: "enrolledclass",
            element: <MyEnrolledClass></MyEnrolledClass>,
         },
         {
            path: "payment/:id",
            element: <MyPayment></MyPayment>,
         },
      ],
   },
]);

export default router;
