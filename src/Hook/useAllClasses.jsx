import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
   const { data: classes = [], refetch } = useQuery({
      queryKey: ["classes"],
      queryFn: async () => {
         const response = await fetch("http://localhost:5000/classes");
         return response.json();
      },
   });

   return [classes, refetch];
};

export default useAllClasses;
