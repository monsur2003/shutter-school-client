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
      queryKey: ["classes", user?.email],
      enabled: !!user?.email && !!localStorage.getItem("access-token"),
      queryFn: async () => {
         const res = await axiosSecure(`/selectedClasses?email=${user?.email}`);
         console.log("axiosSecure", res);
         return res.data;
      },
   });

   return [myClasses, refetch];
};

export default useClass;
