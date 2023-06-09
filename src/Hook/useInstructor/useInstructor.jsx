import { useEffect, useState } from "react";

const useInstructor = () => {
   const [users, setUsers] = useState([]);
   const [loader, setLoader] = useState(true);

   useEffect(() => {
      fetch("http://localhost:5000/users")
         .then((res) => res.json())
         .then((data) => {
            const instructor = data.filter((d) => d.role === "instructor");
            setUsers(instructor);
            setLoader(false);
         });
   }, []);
   return [users, loader];
};

export default useInstructor;
