import React from "react";
import { FaApplePay, FaTrash, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

const SelectedCard = ({ singleClass, handleDelete }) => {
   return (
      <div>
         <div className=" border-2 rounded-lg bg-slate-800 shadow-lg w-[640px] h-[180px] my-4">
            <div className="flex items-center justify-between gap-x-2">
               <div className="flex items-center gap-x-4">
                  <img
                     className="w-[250px] p-3 rounded-l-lg h-[180px]"
                     src={singleClass?.image}
                     alt=""
                  />

                  <div className="">
                     <p className="text-gray-300 font-bold text-[20px]">
                        {singleClass?.name}
                     </p>
                     <p className="text-[18px] text-gray-500">
                        Price:${singleClass?.price}
                     </p>
                     <p className="text-[18px] text-gray-500">
                        {singleClass?.seats}
                     </p>
                  </div>
               </div>
               <div className="pr-5">
                  <button
                     onClick={() => handleDelete(singleClass._id)}
                     className="btn btn-primary btn-square">
                     <FaTrash className="text-[20px]"></FaTrash>
                  </button>
                  <br />
                  <Link to={`/dashboard/payment/${singleClass._id}`}>
                     <button className="btn my-2 btn-secondary btn-square">
                        <FaWallet className="text-[20px]"></FaWallet>
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SelectedCard;
