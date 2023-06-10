import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
   const { user } = useContext(authContext);
   console.log(user, "from admin");
   const [axiosSecure] = useAxiosSecure();

   const { data: isAdmin, isLoading: adminLoading } = useQuery({
      queryKey: ["isAdmin", user?.email],
      enabled: !!user?.email && !!localStorage.getItem("access-token"),
      queryFn: async () => {
         const res = await axiosSecure.get(`/users/admin/${user?.email}`);
         console.log("from admin", res.data);
         return res.data;
      },
   });
   return [isAdmin, adminLoading];
};

export default useAdmin;
