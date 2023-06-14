import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { authContext } from "../../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";

const MyEnrolledClass = () => {
   const { user } = useContext(authContext);
   const [axiosSecure] = useAxiosSecure();

   const { data: enrolledClasses = [], isLoading: enrolledLoading } = useQuery({
      queryKey: ["payments", user?.email],
      queryFn: async () => {
         const res = await axiosSecure.get(
            `/payment/email?email=${user?.email}`
         );
         console.log(res.data); // Check the response data in the console
         return res.data;
      },
   });

   return (
      <div>
         <Helmet>
            <title>Shutter | My enrolled class</title>
         </Helmet>
         <div className="border-2 w-[80%] my-5 mx-auto border-blue-600 rounded-lg p-6">
            <h2 className="text-center text-3xl font-bold mb-2">
               My Total Enrolled classes {enrolledClasses.length}
            </h2>
            <table class="min-w-full divide-y divide-gray-200">
               <thead>
                  <tr>
                     <th
                        scope="col"
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                     </th>
                     <th
                        scope="col"
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                     </th>
                     <th
                        scope="col"
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Data Transaction ID
                     </th>
                     <th
                        scope="col"
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                     </th>
                     <th
                        scope="col"
                        class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                     </th>
                  </tr>
               </thead>
               <tbody class="bg-white divide-y divide-gray-200">
                  {enrolledClasses.map((sClass, index) => (
                     <tr>
                        <td class="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                           {sClass.email}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                           {sClass.transactionId}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                           ${sClass.price}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                           <button class="px-2 py-1 text-sm rounded-md bg-red-500 text-white">
                              Cancel
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyEnrolledClass;
