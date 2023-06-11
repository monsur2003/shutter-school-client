import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useMyClasses = () => {
   const { user } = useContext(authContext);
   const { data: myClasses = [], refetch } = useQuery(
      ["myClasses", user?.email],
      async () => {
         const res = await fetch(
            `http://localhost:5000/myClasses?email=${user?.email}`
         );
         return res.json();
      }
   );
   return [myClasses, refetch];
};
export default useMyClasses;
