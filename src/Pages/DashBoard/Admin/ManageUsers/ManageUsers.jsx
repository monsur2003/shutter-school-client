import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const ManageUsers = () => {
   const { data: users = [], refetch } = useQuery(["users"], async () => {
      const res = await fetch("http://localhost:5000/users", {});
      return res.json();
   });

   const makeAdmin = (id) => {
      fetch(`http://localhost:5000/users/admin/${id}`, {
         method: "PATCH",
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount > 0) {
               refetch();
               toast("Admin updated successfully");
            }
         });
   };

   const makeInstructor = (id) => {
      console.log(id);
   };

   return (
      <div>
         <h2>THis is manage user page{users.length}</h2>

         <div>
            <div className="overflow-x-auto border-2 border-blue-800 shadow-xl rounded-xl p-8 table-zebra">
               <table className="min-w-full bg-white border border-gray-300">
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
                              {user?.role == "admin"
                                 ? "Admin"
                                 : user?.role == "instructor"
                                 ? "Instructor"
                                 : "Student"}
                           </td>

                           <td className="py-4 px-6 border-b">
                              <button
                                 onClick={() => {
                                    makeInstructor(user._id);
                                 }}
                                 className="btn btn-accent btn-xs ">
                                 instructor
                              </button>
                              <button
                                 onClick={() => {
                                    makeAdmin(user._id);
                                 }}
                                 className="btn ml-2 btn-secondary btn-xs">
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