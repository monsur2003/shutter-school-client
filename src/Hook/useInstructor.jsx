import { useEffect, useState } from "react";

const useInstructor = () => {
   const [users, setUsers] = useState([]);
   const [loader, setLoader] = useState(true);
   const token = localStorage.getItem("access-token");

   useEffect(() => {
      fetch("https://shutter-school-server-monsur776.vercel.app/users", {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            const instructor = data.filter((d) => d.role === "instructor");
            setUsers(instructor);
            setLoader(false);
         })
         .catch((error) => {
            // Handle error if needed
            console.error(error);
            setLoader(false);
         });
   }, [token]);

   return [users, loader];
};

export default useInstructor;
