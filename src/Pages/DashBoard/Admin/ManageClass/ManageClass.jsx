import React, { useState } from "react";
import useAllClasses from "../../../../Hook/useAllClasses";
import Title from "../../../../Components/Title/Title";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const ManageClass = () => {
   const [classes, refetch] = useAllClasses();
   const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
   const [feedback, setFeedback] = useState("");
   const [selectedClassId, setSelectedClassId] = useState("");

   const handleApprove = (id) => {
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
      fetch(`http://localhost:5000/classes/deny/${id}`, {
         method: "PATCH",
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount > 0) {
               toast("Class denied successfully");
               refetch();
            }
         });
   };

   const handleOpenFeedbackModal = (id) => {
      setSelectedClassId(id);
      setIsFeedbackModalOpen(true);
   };

   const handleCloseFeedbackModal = () => {
      setIsFeedbackModalOpen(false);
      setFeedback("");
      setSelectedClassId("");
   };

   const handleFeedbackChange = (e) => {
      setFeedback(e.target.value);
   };

   const handleSubmitFeedback = () => {
      if (selectedClassId && feedback) {
         fetch(`http://localhost:5000/classes/feedback/${selectedClassId}`, {
            method: "PATCH",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ feedback }),
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.modifiedCount > 0) {
                  toast("Feedback submitted successfully");
                  handleCloseFeedbackModal();
               }
            });
      }
   };

   return (
      <div className="my-4">
         <Helmet>
            <title>Shutter | Manage class</title>
         </Helmet>
         <div className="overflow-x-auto w-[88%] mx-auto border-2 rounded-lg p-6 border-gray-600">
            <h2 className="text-center text-3xl mb-2 font-bold text-gray-700">
               Total class: {classes.length}
            </h2>
            <table className="table">
               <thead className="bg-blue-500">
                  <tr>
                     <th>#</th>
                     <th>Photo</th>
                     <th>Name</th>
                     <th>Status</th>
                     <th>Approve</th>
                     <th>Deny</th>
                     <th>Feedback</th>
                  </tr>
               </thead>
               <tbody>
                  {classes.map((singleClass, index) => (
                     <tr
                        key={singleClass._id}
                        className="border-b-2 border-gray-400">
                        <td>{index + 1}</td>
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
                              ? "Approved"
                              : singleClass.status === "denied"
                              ? "Denied"
                              : singleClass.status}
                        </td>
                        <td>
                           <button
                              disabled={
                                 singleClass.status === "approved" ||
                                 singleClass.status === "denied"
                              }
                              onClick={() => handleApprove(singleClass._id)}
                              className="btn btn-accent btn-xs">
                              Approve
                           </button>
                        </td>
                        <td>
                           <button
                              disabled={
                                 singleClass.status === "denied" ||
                                 singleClass.status === "approved"
                              }
                              onClick={() => handleDeny(singleClass._id)}
                              className="btn btn-warning btn-xs">
                              Deny
                           </button>
                        </td>
                        <td>
                           <button
                              onClick={() =>
                                 handleOpenFeedbackModal(singleClass._id)
                              }
                              className="btn btn-info btn-xs">
                              Feedback
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         {/* Feedback Modal */}
         {isFeedbackModalOpen && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
               <div className="bg-white w-[40%] rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-4">Provide Feedback</h2>
                  <textarea
                     className="w-full h-24 border border-gray-300 p-2 mb-4"
                     placeholder="Enter your feedback"
                     value={feedback}
                     onChange={handleFeedbackChange}
                  />
                  <div className="flex justify-end">
                     <button
                        onClick={handleCloseFeedbackModal}
                        className="btn btn-secondary mr-2">
                        Cancel
                     </button>
                     <button
                        onClick={handleSubmitFeedback}
                        className="btn btn-primary">
                        Submit
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default ManageClass;
