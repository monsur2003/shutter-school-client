import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSignInAlt } from "react-icons/fa";

const Navbar = ({ user }) => {
   return (
      <nav className="bg-gray-800 py-4 px-8 sm:px-16">
         <div className="flex items-center justify-between">
            <Link to="/" className="text-white text-lg font-bold">
               Shutterschool
            </Link>
            <div className="flex items-center">
               <input type="checkbox" id="menu-toggle" className="hidden" />
               <label
                  htmlFor="menu-toggle"
                  className="cursor-pointer md:hidden flex items-center">
                  <svg
                     className="fill-current text-white w-6 h-6 mr-2"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24">
                     <path
                        fillRule="evenodd"
                        d="M3 4h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 7h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 7h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
                     />
                  </svg>
               </label>
               <div className="hidden md:flex items-center">
                  <Link
                     to="/instructors"
                     className="text-white hover:text-gray-300 mx-2">
                     Instructors
                  </Link>
                  <Link
                     to="/classes"
                     className="text-white hover:text-gray-300 mx-2">
                     Classes
                  </Link>
                  {user ? (
                     <Link
                        to="/dashboard"
                        className="text-white hover:text-gray-300">
                        <img
                           src={user.profilePicture}
                           alt="User Profile"
                           className="w-8 h-8 rounded-full"
                        />
                     </Link>
                  ) : (
                     <Link
                        to="/login"
                        className="text-white hover:text-gray-300 flex items-center">
                        <FaSignInAlt className="mr-1" />
                        Login
                     </Link>
                  )}
               </div>
            </div>
         </div>
         <div className="hidden md:hidden">
            <input type="checkbox" id="menu-toggle" className="hidden" />
            <div className="w-full bg-gray-800 pt-2">
               <div className="flex items-center justify-between">
                  <Link
                     to="/instructors"
                     className="block py-2 px-4 text-white hover:bg-gray-700">
                     Instructors
                  </Link>
                  <Link
                     to="/classes"
                     className="block py-2 px-4 text-white hover:bg-gray-700">
                     Classes
                  </Link>
                  {user ? (
                     <Link
                        to="/dashboard"
                        className="block py-2 px-4 text-white hover:bg-gray-700">
                        <img
                           src={user.profilePicture}
                           alt="User Profile"
                           className="w-8 h-8 rounded-full"
                        />
                     </Link>
                  ) : (
                     <Link
                        to="/login"
                        className="block py-2 px-4 text-white hover:bg-gray-700">
                        <FaSignInAlt className="mr-1" />
                        Login
                     </Link>
                  )}
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
