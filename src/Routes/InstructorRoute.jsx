import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

import useIns from "../Hook/useIns";

const InstructorRoute = ({ children }) => {
   const { user, loader } = useContext(authContext);
   const [isInstructor, instructorLoading] = useIns();

   let location = useLocation();

   if ((loader, instructorLoading)) {
      return (
         <>
            <div className="w-full h-[100vh] flex justify-center items-center">
               <span class="loader"></span>
            </div>
         </>
      );
   }
   if (user && isInstructor) {
      return children;
   }

   return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
