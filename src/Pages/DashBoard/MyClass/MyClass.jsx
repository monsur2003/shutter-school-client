import React, { useState } from "react";
import useMyClasses from "../../../Hook/useMyClasses";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const MyClass = () => {
   const [myClasses, refetch] = useMyClasses();
   const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
   const [selectedClassId, setSelectedClassId] = useState("");

   const sortedClasses = myClasses.sort((a, b) => b.enrolled - a.enrolled);

   const handleOpenFeedbackModal = (id) => {
      setSelectedClassId(id);
      setIsFeedbackModalOpen(true);
   };

   const handleCloseFeedbackModal = () => {
      setIsFeedbackModalOpen(false);

      setSelectedClassId("");
   };

   const handleUpdate = (event, classId) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const price = form.price.value;
      const seats = form.seats.value;
      const photo = form.photo.files[0];

      const formData = new FormData();
      formData.append("image", photo);

      const url = `https://api.imgbb.com/1/upload?key=${
         import.meta.env.VITE_IMGBB
      }`;
      fetch(url, {
         method: "POST",
         body: formData,
      })
         .then((res) => res.json())
         .then((data) => {
            const updateDoc = {
               name,
               price,
               seats,
               image: data.data.display_url,
            };
            console.log(updateDoc);
            fetch(
               `https://shutter-school-server-monsur776.vercel.app/classes/${classId}`,
               {
                  method: "PUT",
                  headers: {
                     "Content-Type": "application/json",
                  },
                  body: JSON.stringify(updateDoc),
               }
            )
               .then((res) => res.json())
               .then((data) => {
                  console.log(data);
                  if (data.modifiedCount > 0) {
                     toast("Class updated successfully");
                     refetch();
                     setIsFeedbackModalOpen(false);
                  }
               });
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <div>
         <Helmet>
            <title>Shutter | my class</title>
         </Helmet>
         <div className="w-[88%] mx-auto border-2 border-blue-700 p-6 my-4 shadow-xl rounded-xl">
            <h2 className="text-center text-3xl font-semibold mb-3">
               Your Total class: {myClasses.length}
            </h2>
            <table className="table border-2 rounded-lg">
               <thead className="bg-blue-500">
                  <tr className="text-black font-semibold">
                     <th>#</th>
                     <th>Photo</th>
                     <th>Name</th>
                     <th>Status</th>
                     <th>Feedback</th>
                     <th>Enrolled</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {sortedClasses.map((singleClass, index) => (
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
                           {singleClass.feedback
                              ? singleClass.feedback
                              : "Not found"}
                        </td>
                        <td>{singleClass.enrolled}</td>
                        <td>
                           <button
                              onClick={() =>
                                 handleOpenFeedbackModal(singleClass._id)
                              }
                              className="btn btn-info btn-xs">
                              Update
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         {isFeedbackModalOpen && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
               <div className="bg-white w-[55%] ml-28 rounded-lg p-6">
                  <h2 className="text-center text-2xl font-bold mb-4">
                     Update class
                  </h2>
                  <form
                     onSubmit={(event) => handleUpdate(event, selectedClassId)}
                     className="w-[60%] mx-auto my-2">
                     <input
                        type="text"
                        name="name"
                        placeholder="Class name"
                        className="input  input-primary w-full"
                     />
                     <input
                        type="file"
                        name="photo"
                        className="file-input file-input-accent my-3 input-primary w-full"
                     />
                     <div className="grid grid-cols-2 gap-x-3">
                        <input
                           type="number"
                           name="seats"
                           placeholder="Available seats"
                           className="input input-primary w-full"
                        />
                        <input
                           type="number"
                           name="price"
                           placeholder="Class fees"
                           className="input input-primary w-full"
                        />
                     </div>
                     <input
                        type="submit"
                        value="Update"
                        className="btn btn-primary mt-3 btn-block"
                     />
                  </form>
                  <div className="flex justify-end">
                     <button
                        onClick={handleCloseFeedbackModal}
                        className="btn btn-secondary btn-md mr-2">
                        Cancel
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default MyClass;
