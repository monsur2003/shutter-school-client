import React, { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { user, loader } = useContext(authContext);
   let location = useLocation();

   if (loader) {
      return (
         <>
            <h2>LOadingggggggg</h2>
         </>
      );
   }
   if (user) {
      return children;
   }

   return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
