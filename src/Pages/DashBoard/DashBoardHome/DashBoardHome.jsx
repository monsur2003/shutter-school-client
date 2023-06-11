import React, { useContext, useEffect, useRef } from "react";
import { authContext } from "../../../Providers/AuthProvider";
import Cover from "../../../Components/Cover/Cover";
import imageBg from "../../../assets/banner/dashboardHome.jpg";
import useAdmin from "../../../Hook/useAdmin";
import useIns from "../../../Hook/useIns";
import Typewriter from "typewriter-effect/dist/core";

const DashBoardHome = () => {
   const { user } = useContext(authContext);
   const isAdmin = useAdmin();
   const isInstructor = useIns();
   const typewriterRef = useRef(null);

   useEffect(() => {
      if (typewriterRef.current) {
         new Typewriter(typewriterRef.current, {
            strings: messages,
            autoStart: true,
            loop: true,
            delay: 30,
         });
      }
   }, []);

   const messages = [
      "Believe in yourself and all that you are. Know that there is something inside you greater than any obstacle.",
      " It is the courage to continue that counts.",
      "The only limit to our realization of tomorrow will be our doubts of today.",
      "Don't watch the clock; do what it does. Keep going.",
      "Success is not about being better than someone else. ",
   ];

   return (
      <div className="relative">
         <img src={imageBg} alt="" />
         <div className="bg-gradient-to-r from-[#000000cc] to-[#0909387c] w-full min-h-full absolute top-0"></div>
         <div className="absolute h-[100vh] top-24 bottom-0 my-3 left-7">
            <h3 className="text-6xl font-bold text-blue-800">
               Hello! <span className="text-5xl">{user?.displayName}</span>
            </h3>
            <p className="text-4xl w-[50%] py-4 font-bold">
               {isAdmin[0]
                  ? `Now You can manage all users and All classes`
                  : isInstructor[0]
                  ? "Now you can add class update class and delete class"
                  : "Hey Welcome Here is your Class list and payment list payment history"}
            </p>
            <h3
               className="w-[60%]  pt-2 text-[18px] text-gray-500 font-semibold"
               ref={typewriterRef}></h3>
            <h3></h3>
         </div>
      </div>
   );
};

export default DashBoardHome;
