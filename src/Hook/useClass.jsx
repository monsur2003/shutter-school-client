import { useContext, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import { authContext } from "../Providers/AuthProvider";

const useClass = () => {
   const { user } = useContext(authContext);

   const [axiosSecure] = useAxiosSecure();
   const {
      isLoading,
      refetch,
      data: myClasses = [],
   } = useQuery({
      queryKey: ["selectedClasses", user?.email],

      queryFn: async () => {
         const res = await axiosSecure.get(
            `/selectedClasses?email=${user?.email}`
         );
         console.log("axiosSecure", res);
         return res.data;
      },
   });

   return [myClasses, refetch];
};

export default useClass;
