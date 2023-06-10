import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
   const { user, loader } = useContext(authContext);
   console.log(user, loader);
   let location = useLocation();
   // const loading = false;
   if (loader) {
      return (
         <>
            <div className="w-full h-[100vh] flex justify-center items-center">
               <span class="loader"></span>
            </div>
         </>
      );
   }
   if (user) {
      return children;
   }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
