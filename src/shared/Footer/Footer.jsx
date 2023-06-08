import React from "react";

const Footer = () => {
   return (
      <div>
         <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#1F2937] text-white">
               <div className="p-6 text-center">
                  <h2 className="text-2xl mb-2 font-semibold">Contact us</h2>
                  <p>123 ABS Street, Uni 21, Bangladesh</p>
                  <p>+801889751776</p>
                  <p>Mon-Fir: 8:00 - 2:00</p>
                  <p>Mon-Fir: 8:00 - 2:00</p>
               </div>
            </div>
            <div className=" p-6 text-center text-white bg-[#111827]">
               <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
               <p>Join Us on Social media</p>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Temporibus natus quasi corrupti tenetur exercitationem eos,
                  dicta animi esse ipsa similique.
               </p>
            </div>
         </div>
         <div className="bg-[#151515] p-3 text-center">
            <p className="font-semibold text-gray-200">
               Copyright © CulinaryCloud. All rights reserved.
            </p>
         </div>
      </div>
   );
};

export default Footer;
