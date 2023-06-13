import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import useAdmin from "../Hook/useAdmin";

const AdminRoute = ({ children }) => {
   const { user, loader } = useContext(authContext);
   const [isAdmin, adminLoading] = useAdmin();
   console.log(user, loader);
   let location = useLocation();

   if ((loader, adminLoading)) {
      return (
         <>
            <div className="w-full h-[100vh] flex justify-center items-center">
               <span class="loader"></span>
            </div>
         </>
      );
   }
   if (user && isAdmin) {
      return children;
   }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
