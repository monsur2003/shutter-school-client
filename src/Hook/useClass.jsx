import { useContext, useState } from "react";
import { authContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useClass = () => {
   const { user } = useContext(authContext);
   const token = localStorage.getItem("access-token");

   const {
      isLoading,
      refetch,
      data: myClasses = [],
   } = useQuery({
      queryKey: ["carts", user?.email],
      queryFn: async () => {
         const res = await fetch(
            `http://localhost:3000/carts?email=${user.email}`,
            {
               headers: {
                  authorization: `Bearer ${token}`,
               },
            }
         );
         return res.json();
      },
   });

   return [myClasses, refetch];
};

export default useClass;
