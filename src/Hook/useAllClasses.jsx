import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
   const { data: classes = [], refetch } = useQuery({
      queryKey: ["classes"],
      queryFn: async () => {
         const response = await fetch(
            "https://shutter-school-server-monsur776.vercel.app/classes"
         );
         return response.json();
      },
   });

   return [classes, refetch];
};

export default useAllClasses;
