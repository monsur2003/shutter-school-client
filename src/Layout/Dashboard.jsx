import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import useAdmin from "../Hook/useAdmin";
import { HiUsers } from "react-icons/hi";

import AuthProvider, { authContext } from "../Providers/AuthProvider";
import useIns from "../Hook/useIns";
import ActiveLink from "../Components/ActiveLink/ActiveLink";
import {
   FaBook,
   FaBookMedical,
   FaHistory,
   FaHome,
   FaUpload,
   FaUser,
   FaUserAlt,
   FaWallet,
} from "react-icons/fa";
import profile from "../assets/banner/monsur.png";

const DashBoard = () => {
   const isAdmin = useAdmin();
   const isInstructor = useIns();
   const { user } = useContext(authContext);
   // const user = false;

   console.log(isAdmin, isInstructor);
   return (
      <>
         <div className="">
            <Helmet>
               <title>Shutter | dashboard</title>
            </Helmet>
            <div className="flex">
               <div className="w-[25%] border-r-4 bg-[#080871] text-gray-400 border-blue-600 h-[1000vh]">
                  <div className="flex flex-col justify-center items-center py-3 border-b-2 border-gray-500">
                     <div className="border-4 border-pink-900 rounded-full">
                        {user ? (
                           <img
                              className="w-[100px] h-[100px] rounded-full"
                              src={user.photoURL}
                              alt="image"
                           />
                        ) : (
                           <FaUserAlt className="w-[100px] h-[100px] text-blue-500 rounded-full"></FaUserAlt>
                        )}
                     </div>
                     <p className="text-3xl font-bold py-1">
                        {user?.displayName}
                     </p>
                     <p className="text-[16px] font-semibold tracking-widest text-gray-700">
                        {isAdmin[0]
                           ? "Admin"
                           : isInstructor[0]
                           ? "Instructor"
                           : "Student"}
                     </p>
                  </div>
                  <div className="text-center my-4">
                     {isAdmin[0] ? (
                        <>
                           <ActiveLink to="/dashboard/manageclass">
                              <span className="font-semibold btn-ghost btn btn-block ">
                                 <FaBook></FaBook> Manage class
                              </span>
                           </ActiveLink>{" "}
                           <ActiveLink to="/dashboard/manageuser">
                              <span className="font-semibold btn-ghost btn btn-block">
                                 <HiUsers></HiUsers> Manage users
                              </span>
                           </ActiveLink>
                        </>
                     ) : isInstructor[0] ? (
                        <>
                           <ActiveLink to="/dashboard/addclass">
                              <span className="font-semibold btn-ghost btn btn-block">
                                 <FaUpload></FaUpload> Add Class
                              </span>
                           </ActiveLink>
                           <ActiveLink className="my-3" to="/dashboard/myclass">
                              <span className="font-semibold btn-ghost btn btn-block">
                                 <FaBookMedical></FaBookMedical> My Class
                              </span>
                           </ActiveLink>
                        </>
                     ) : (
                        <>
                           <ActiveLink
                              className=""
                              to="/dashboard/selectedclass">
                              <span className="font-semibold btn-ghost btn btn-block">
                                 <FaBook></FaBook> My selected class
                              </span>
                           </ActiveLink>
                           <ActiveLink
                              className="mt-4"
                              to="/dashboard/enrolledclass">
                              <span className="font-semibold btn-ghost btn btn-block">
                                 <FaWallet></FaWallet> My enrolled class
                              </span>
                           </ActiveLink>
                           <ActiveLink className="" to="/dashboard/mypayment">
                              <span className="font-semibold btn-ghost btn btn-block">
                                 <FaHistory></FaHistory> My payment History
                              </span>
                           </ActiveLink>
                        </>
                     )}

                     <div className="border-t-2 border-gray-400"></div>
                     <Link to="/">
                        <button className="btn btn-ghost w-full">
                           <FaHome className=""></FaHome> Home
                        </button>
                     </Link>
                     <Link to="/instructor">
                        <button className="btn btn-ghost w-full">
                           <FaUser></FaUser> Instructor
                        </button>
                     </Link>
                  </div>
               </div>
               <div className="w-[75%]  mx-auto">
                  <Outlet></Outlet>
               </div>
            </div>
         </div>
      </>
   );
};

export default DashBoard;
