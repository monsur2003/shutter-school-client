import React, { useContext, useState } from "react";
import { authContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";

import { useNavigate } from "react-router-dom";
import useUsers from "../../../Hook/useUsers";
import useAdmin from "../../../Hook/useAdmin";
import useIns from "../../../Hook/useIns";

const AllClassesCard = ({ singleClass, title, setSingleClass }) => {
   const { user } = useContext(authContext);
   const [users, refetch] = useUsers();
   const isAdmin = useAdmin();
   const isInstructor = useIns();

   console.log(users);
   const { name, image, instructor_name, price } = singleClass;

   const [buttonDisabled, setButtonDisabled] = useState(
      singleClass.seats === 0
   );
   const navigate = useNavigate();

   const handleSelect = (id) => {
      if (user && user.email) {
         const selectClass = {
            classId: id,
            name,
            image,
            instructor_name,
            price,
            email: user?.email,
         };
         fetch(
            "https://shutter-school-server-monsur776.vercel.app/selectedClasses",
            {
               method: "POST",
               headers: {
                  "content-type": "application/json",
               },
               body: JSON.stringify(selectClass),
            }
         )
            .then((res) => res.json())
            .then((data) => {
               if (data.insertedId) {
                  setButtonDisabled(true);
                  Swal.fire({
                     position: "center",
                     icon: "success",
                     title: "Class added successfully",
                     showConfirmButton: false,
                     timer: 1500,
                  });
               }
            });
      } else {
         Swal.fire({
            title: "Please Login to select the class",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Log in",
         }).then((result) => {
            if (result.isConfirmed) {
               navigate("/login");
            }
         });
      }
   };

   const cardClassName =
      singleClass.seats === 0
         ? "card w-[350px] gap-x-4 shadow-xl bg-red-500"
         : "card w-[350px] gap-x-4 shadow-xl bg-white";

   return (
      <div>
         <h3 className="text-2xl font-semibold mb-4">{title}</h3>
         <div className={cardClassName}>
            <figure>
               <img
                  src={singleClass?.image}
                  className="h-[200px] w-full"
                  alt="Shoes"
               />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{singleClass?.name}</h2>
               <h2 className="font-semibold text-[18px]">
                  {singleClass?.instructor_name}
               </h2>

               <div className="card-actions justify-start">
                  <p className="text-[16px]">
                     Available seats:{" "}
                     <span className="badge badge-primary badge-outline">
                        {singleClass?.seats}
                     </span>
                  </p>
               </div>
               <p>
                  Price: <span>${singleClass?.price}</span>
               </p>
            </div>
            <button
               onClick={() => handleSelect(singleClass._id)}
               disabled={user && (isAdmin[0] || isInstructor[0])}
               className="btn btn-accent rounded-t-none">
               Select Class
            </button>
         </div>
      </div>
   );
};

export default AllClassesCard;
