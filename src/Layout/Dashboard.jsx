import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const DashBoard = () => {
   const admin = false;
   const instructor = false;
   return (
      <>
         <Navbar></Navbar>
         <div className="py-[76px]">
            <Helmet>
               <title>Shutter | dashboard</title>
            </Helmet>
            <div className="flex">
               <div className="w-[25%] bg-blue-400 h-[100vh]">
                  <div className="border-b-2 border-gray-500 rounded-tr-2xl rounded-tl-2xl pb-4 pt-2 text-5xl font-bold">
                     Shutter School
                  </div>
                  <div className="text-center my-4">
                     {admin ? (
                        <>
                           <Link to="dashboard/manageclass">
                              <span className="btn btn-accent btn-sm btn-block">
                                 Manage class
                              </span>
                           </Link>
                           <Link to="dashboard/manageuser">
                              <span className="btn btn-accent btn-sm btn-block">
                                 Manage users
                              </span>
                           </Link>
                        </>
                     ) : instructor ? (
                        <>
                           <Link to="dashboard/addclass">
                              <span className="btn btn-accent btn-sm btn-block">
                                 Add Class
                              </span>
                           </Link>
                           <Link to="dashboard/myclass">
                              <span className="btn btn-accent btn-sm btn-block">
                                 My Class
                              </span>
                           </Link>
                        </>
                     ) : (
                        <>
                           <Link className="" to="dashboard/selectedclass">
                              <span className="btn btn-accent btn-sm btn-block">
                                 My selected class
                              </span>
                           </Link>
                           <Link className="" to="dashboard/enrolledclass">
                              <span className="btn btn-accent btn-sm btn-block">
                                 My enrolled class
                              </span>
                           </Link>
                           <Link className="" to="dashboard/mypayment">
                              <span className="btn btn-accent btn-sm btn-block">
                                 My payment
                              </span>
                           </Link>
                        </>
                     )}
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
