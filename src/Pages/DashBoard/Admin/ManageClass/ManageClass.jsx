import React from "react";
import useAllClasses from "../../../../Hook/useAllClasses";
import Title from "../../../../Components/Title/Title";

import { toast } from "react-hot-toast";

const ManageClass = () => {
   const [classes, refetch] = useAllClasses();

   const handleApprove = (id) => {
      // console.log(id);
      fetch(`http://localhost:5000/classes/approve/${id}`, {
         method: "PATCH",
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount > 0) {
               toast("Class approved successfully");
               refetch();
            }
         });
   };
   const handleDeny = (id) => {
      // console.log(id);
      fetch(`http://localhost:5000/classes/deny/${id}`, {
         method: "PATCH",
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount > 0) {
               toast("class denied successfully");
               refetch();
            }
         });
   };

   return (
      <div className="my-4">
         <div className="overflow-x-auto border-2 rounded-lg p-6 border-gray-600">
            <h2 className="text-center text-3xl mb-2 font-bold text-gray-700 ">
               Total class: {classes.length}
            </h2>
            <table className="table">
               <thead className="bg-blue-500">
                  <tr>
                     <th>#</th>
                     <th>Photo</th>
                     <th>name</th>
                     <th>Status</th>
                     <th>Approve</th>
                     <th>deny</th>
                     <th>Feedback</th>
                  </tr>
               </thead>
               <tbody>
                  {classes.map((singleClass, index) => (
                     <tr className="border-b-2 border-gray-400">
                        <th>{index + 1}</th>
                        <td>
                           <div className="flex items-center space-x-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img
                                       src={singleClass.image}
                                       alt="Avatar Tailwind CSS Component"
                                    />
                                 </div>
                              </div>
                              <div>
                                 <div className="font-bold">
                                    {singleClass.name}
                                 </div>
                                 <div className="text-sm opacity-50">
                                    {singleClass.instructor_email}
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td>{singleClass.instructor_name}</td>
                        <td>
                           {singleClass.status === "approved"
                              ? "approved"
                              : singleClass.status === "denied"
                              ? "denied"
                              : singleClass.status}
                        </td>
                        <th>
                           <button
                              disabled={singleClass.status === "approved"}
                              onClick={() => handleApprove(singleClass._id)}
                              className="btn btn-accent btn-xs">
                              Approve
                           </button>
                        </th>
                        <th>
                           <button
                              disabled={singleClass.status == "denied"}
                              onClick={() => handleDeny(singleClass._id)}
                              className="btn btn-warning btn-xs">
                              deny
                           </button>
                        </th>
                        <th>
                           <button className="btn btn-info btn-xs">
                              Feedback
                           </button>
                        </th>
                     </tr>
                  ))}

                  {/* row 2 */}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ManageClass;
