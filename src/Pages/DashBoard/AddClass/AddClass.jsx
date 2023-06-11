import React, { useContext, useState } from "react";
import { authContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { toast } from "react-hot-toast";

const AddClass = () => {
   const { user } = useContext(authContext);
   const [image, setImage] = useState(null);
   const [axiosSecure] = useAxiosSecure();
   const handleAdd = (event) => {
      event.preventDefault();
      const form = event.target;
      const instructorName = form.name.value;
      const email = form.email.value;
      const className = form.className.value;
      const availableSeats = form.seats.value;
      const price = form.price.value;
      const photo = form.photo.files[0];
      console.log(photo);

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
            setImage(data.data.display_url);
            console.log(data);
         })
         .catch((err) => {
            console.log(err);
         });

      const course = {
         instructorName,
         email,
         className,
         price,
         availableSeats,
         photo: image,
         status: "pending",
      };

      fetch("http://localhost:5000/classes", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(course),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               toast("classAdded successfully");
               form.reset();
            }
         });
   };

   return (
      <>
         <form
            onSubmit={handleAdd}
            className="border-2 w-[80%] mx-auto bordergray-300 p-6 rounded-2xl shadow-2xl">
            <h2 className="text-4xl font-bold text-center my-3">
               Add a class{" "}
            </h2>
            <div className="w-[80%] mx-auto">
               <div className="grid mb-2 md:grid-cols-2 gap-x-2">
                  <div>
                     <label
                        htmlFor="name"
                        className="block text-[18px] text-gray-600">
                        Name
                     </label>
                     <input
                        type="text"
                        name="name"
                        defaultValue={user?.displayName}
                        readOnly
                        className="input input-primary  w-full"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="email"
                        className="block text-[18px] text-gray-600">
                        Email
                     </label>
                     <input
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        readOnly
                        className="input input-primary  w-full"
                     />
                  </div>
               </div>

               <div>
                  <label
                     htmlFor="ClassName"
                     className="block  text-[18px] text-gray-600">
                     Class Name*
                  </label>
                  <input
                     type="text"
                     name="className"
                     placeholder="Class Name"
                     className="input input-primary  w-full"
                  />
               </div>
               <div className="my-3">
                  <label
                     htmlFor="image"
                     className="block text-[18px] text-gray-600">
                     Class Image*
                  </label>
                  <input
                     type="file"
                     name="photo"
                     className="file-input-primary file-input  w-full"
                  />
               </div>
               <div className="my-2">
                  <label
                     htmlFor="Available seats"
                     className="block text-[18px] text-gray-600">
                     Available seats
                  </label>
                  <input
                     type="number"
                     name="seats"
                     placeholder="Available seats"
                     className="input input-primary w-full"
                  />
               </div>
               <div className="my-2">
                  <label
                     htmlFor="Prices"
                     className="block text-[18px] text-gray-600">
                     Price
                  </label>
                  <input
                     type="number"
                     name="price"
                     placeholder="Course fee"
                     className="input input-primary  w-full"
                  />
               </div>
               <input
                  type="submit"
                  value="Add Class"
                  className="btn btn-success btn-block"
               />
            </div>
         </form>
      </>
   );
};

export default AddClass;
