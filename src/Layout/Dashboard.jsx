import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import useAdmin from "../Hook/useAdmin";
import { HiUsers } from "react-icons/hi";

import { authContext } from "../Providers/AuthProvider";
import useIns from "../Hook/useIns";
import ActiveLink from "../Components/ActiveLink/ActiveLink";
import { FaHome, FaShoppingBag, FaUserAlt } from "react-icons/fa";

const DashBoard = () => {
   const isAdmin = useAdmin();
   const isInstructor = useIns();

   console.log(isAdmin, isInstructor);
   return (
      <>
         <Navbar></Navbar>
         <div className="">
            <Helmet>
               <title>Shutter | dashboard</title>
            </Helmet>
            <div className="flex">
               <div className="w-[25%]  border-r-4 bg-gray-400 border-blue-600 min-h-full">
                  <div className="border-b-2 text-center border-gray-500 rounded-tr-2xl rounded-tl-2xl pb-4 pt-2 text-5xl font-bold">
                     Shutter
                     <p className="text-[20px] font-semibold space-x-6">
                        School
                     </p>
                  </div>
                  <div className="text-center my-4">
                     {isAdmin[0] ? (
                        <>
                           <ActiveLink to="dashboard/manageclass">
                              <span className="font-semibold btn btn-wide ">
                                 Manage class
                              </span>
                           </ActiveLink>{" "}
                           <br />
                           <br />
                           <ActiveLink to="dashboard/manageuser">
                              <span className="font-semibold">
                                 Manage users
                              </span>
                           </ActiveLink>
                        </>
                     ) : isInstructor[0] ? (
                        <>
                           <ActiveLink to="dashboard/addclass">
                              <span className="">Add Class</span>
                           </ActiveLink>
                           <ActiveLink className="my-3" to="dashboard/myclass">
                              <span className="">My Class</span>
                           </ActiveLink>
                        </>
                     ) : (
                        <>
                           <ActiveLink
                              className=""
                              to="dashboard/selectedclass">
                              <span className="">My selected class</span>
                           </ActiveLink>
                           <ActiveLink
                              className="mt-4"
                              to="dashboard/enrolledclass">
                              <span className="">My enrolled class</span>
                           </ActiveLink>
                           <ActiveLink className="" to="dashboard/mypayment">
                              <span className="">My payment</span>
                           </ActiveLink>
                        </>
                     )}

                     <div className="divider"></div>
                     <Link>
                        <button className="btn btn-ghost w-full">
                           <FaHome className="mr-[6px]"></FaHome> Home
                        </button>
                     </Link>
                     <Link>
                        <button className="btn btn-ghost w-full">
                           <FaShoppingBag className="mr-[6px]"></FaShoppingBag>{" "}
                           Instructor
                        </button>
                     </Link>
                     <Link to="/">
                        <button className="btn btn-ghost w-full">
                           <FaHome className="mr-[6px]"></FaHome> Home
                        </button>
                     </Link>
                  </div>
               </div>
               <div className="w-[70%] mx-auto">
                  <Outlet></Outlet>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </>
   );
};

export default DashBoard;
