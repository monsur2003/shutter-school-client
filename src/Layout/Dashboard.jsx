import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import useAdmin from "../Hook/useAdmin";

import { authContext } from "../Providers/AuthProvider";
import useIns from "../Hook/useIns";

const DashBoard = () => {
   const { user, loader } = useContext(authContext);

   const isAdmin = useAdmin();
   const isInstructor = useIns();
   console.log({ isAdmin });

   return (
      <>
         <Navbar></Navbar>
         <div className="">
            <Helmet>
               <title>Shutter | dashboard</title>
            </Helmet>
            <div className="flex">
               <div className="w-[25%]  bg-[#4285c4] h-[100vh]">
                  <div className="border-b-2 text-center border-gray-500 rounded-tr-2xl rounded-tl-2xl pb-4 pt-2 text-5xl font-bold">
                     Shutter
                     <p className="text-[20px] font-semibold space-x-6">
                        School
                     </p>
                  </div>
                  <div className="text-center my-4">
                     {isAdmin ? (
                        <>
                           <Link to="dashboard/manageclass">
                              <span className="btn btn-accent btn-sm btn-block">
                                 Manage class
                              </span>
                           </Link>
                           <Link className="my-3" to="dashboard/manageuser">
                              <span className="btn btn-accent btn-sm btn-block">
                                 Manage users
                              </span>
                           </Link>
                        </>
                     ) : isInstructor ? (
                        <>
                           <Link to="dashboard/addclass">
                              <span className="btn btn-accent btn-sm btn-block">
                                 Add Class
                              </span>
                           </Link>
                           <Link className="my-3" to="dashboard/myclass">
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
                           <Link className="mt-4" to="dashboard/enrolledclass">
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
