import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useIns = () => {
   const { user } = useContext(authContext);
   const [axiosSecure] = useAxiosSecure();

   const { data: isInstructor, isLoading: instructorLoading } = useQuery({
      queryKey: ["isInstructor", "instructor", user?.email],
      enabled: !!user?.email && !!localStorage.getItem("access-token"),
      queryFn: async () => {
         const res = await axiosSecure.get(`/users/instructor/${user?.email}`);

         return res.data.instructor;
      },
   });
   return [isInstructor, instructorLoading];
};
export default useIns;
