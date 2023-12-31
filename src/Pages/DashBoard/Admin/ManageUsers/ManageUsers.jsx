import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Title from "../../../../Components/Title/Title";
import useUsers from "../../../../Hook/useUsers";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
   const [users, refetch] = useUsers();

   const makeAdminMutation = useMutation(
      (id) =>
         fetch(
            `https://shutter-school-server-monsur776.vercel.app/users/admin/${id}`,
            {
               method: "PATCH",
            }
         ).then((res) => res.json()),
      {
         onSuccess: () => {
            refetch();
            toast("Admin updated successfully");
         },
      }
   );

   const makeInstructorMutation = useMutation(
      (id) =>
         fetch(
            `https://shutter-school-server-monsur776.vercel.app/users/instructor/${id}`,
            {
               method: "PATCH",
            }
         ).then((res) => res.json()),
      {
         onSuccess: () => {
            refetch();
            toast("Instructor updated successfully");
         },
      }
   );

   const makeAdmin = (id) => {
      makeAdminMutation.mutate(id);
   };

   const makeInstructor = (id) => {
      makeInstructorMutation.mutate(id);
   };

   return (
      <div className="my-5">
         <Helmet>
            <title>Shutter | manage users</title>
         </Helmet>
         <div className="">
            <div className="overflow-x-auto w-[88%]  mx-auto border-2 border-blue-800 shadow-xl rounded-xl p-8 table-zebra">
               <h3 className="text-3xl font-bold text-center mb-2">
                  Total users {users.length}
               </h3>
               <table className=" w-full bg-white border border-gray-300">
                  <thead>
                     <tr>
                        <th className="py-3 px-6 font-semibold uppercase border-b">
                           #
                        </th>
                        <th className="py-3 px-6 font-semibold uppercase border-b">
                           Name
                        </th>
                        <th className="py-3 px-6 font-semibold uppercase border-b">
                           email
                        </th>
                        <th className="py-3 px-6 font-semibold uppercase border-b">
                           role
                        </th>
                        <th className="py-3 px-6 font-semibold uppercase border-b">
                           action
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {users.map((user, index) => (
                        <tr key={user._id}>
                           <td className="py-4 px-6 border-b">{index + 1}</td>
                           <td className="py-4 px-6 border-b">{user?.name}</td>
                           <td className="py-4 px-6 border-b">{user?.email}</td>
                           <td className="py-4 px-6 border-b">
                              {user?.role === "admin"
                                 ? "Admin"
                                 : user?.role === "instructor"
                                 ? "Instructor"
                                 : "Student"}
                           </td>

                           <td className="py-4 px-6 border-b">
                              <button
                                 onClick={() => makeInstructor(user._id)}
                                 className="btn btn-accent btn-xs"
                                 disabled={user?.role === "instructor"}>
                                 instructor
                              </button>
                              <button
                                 onClick={() => makeAdmin(user._id)}
                                 className="btn ml-2 btn-secondary btn-xs"
                                 disabled={user?.role === "admin"}>
                                 Admin
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default ManageUsers;
