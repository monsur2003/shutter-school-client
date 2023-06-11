import { Link } from "react-router-dom";

import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import ActiveLink from "../../Components/ActiveLink/ActiveLink";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Providers/AuthProvider";
import { FiMenu, FiX } from "react-icons/fi";

import logo from "../../assets/banner/logo (3).png";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const { user, logout } = useContext(authContext);
   console.log(user);
   const [theme, setTheme] = useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
   );
   useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
   }, [theme]);

   const handleMode = (event) => {
      if (event.target.checked) {
         setTheme("dark");
      } else {
         setTheme("light");
      }
   };

   const handleLogout = () => {
      logout();
   };

   return (
      <>
         <nav className="  bg-blue-950 md:py-4 md:px-10">
            <div
               className="cursor-pointer md:hidden flex h-16 py-4 items-center justify-around"
               onClick={() => setIsOpen(!isOpen)}>
               <div>
                  {isOpen ? (
                     <FiX className="text-4xl text-pink-600"></FiX>
                  ) : (
                     <FiMenu className="text-4xl text-pink-600"></FiMenu>
                  )}
               </div>

               <div>
                  <img src={logo} className="mt-3 ml-4 md:ml-0" />
               </div>
            </div>

            <div
               className={`md:flex md:justify-between z-40 h-11  absolute md:static  min-h-full w-[300px] md:w-full duration-700 md:items-center ${
                  isOpen ? "pl-2 bg-blue-950" : "-left-[400px]"
               }`}>
               <div>
                  <div className="md:text-4xl  hidden md:block  ml-4 md:ml-0 text-2xl font-bold uppercase">
                     <img src={logo} className="pt-6" alt="" />
                  </div>
               </div>
               <div className="flex text-white text-[16px] md:space-x-5 space-y-3 md:space-y-0 flex-col ml-4 md:ml-0 md:flex-row">
                  <ActiveLink to={"/"}>
                     <span className="hover:text-pink-400 delay-200 hover:bg-slate-500 hover:rounded-md p-1">
                        Home
                     </span>
                  </ActiveLink>
                  <ActiveLink to={"/instructor"}>
                     <span className="hover:text-pink-400 delay-200 hover:bg-slate-500 hover:rounded-md p-1">
                        Instructor
                     </span>
                  </ActiveLink>
                  <ActiveLink to={"/classes"}>
                     <span className="hover:text-pink-400 delay-200 hover:bg-slate-500 hover:rounded-md p-1">
                        Classes
                     </span>
                  </ActiveLink>
                  {user ? (
                     <ActiveLink to="/dashboard">
                        <span className="hover:text-pink-400 delay-200 hover:bg-slate-500 hover:rounded-md p-1">
                           Dashboard
                        </span>
                     </ActiveLink>
                  ) : (
                     ""
                  )}
               </div>
               <div className="md:flex space-x-3">
                  <div>
                     {user ? (
                        <div className="md:flex flex-col md:flex-row items-center space-x-3">
                           <img
                              className="w-[50px] hidden md:block h-[50px] rounded-full"
                              src={user?.photoURL}
                              alt=""
                           />

                           <button
                              onClick={handleLogout}
                              className="btn mt-3 md:mt-0 btn-primary btn-md">
                              Logout
                           </button>
                        </div>
                     ) : (
                        <div className="md:flex space-x-3 items-center">
                           {" "}
                           <FaUserAlt className="text-4xl hidden md:block text-gray-400"></FaUserAlt>
                           <Link to={"/login"}>
                              <button className=" btn btn-md mt-3 md:mt-0 btn-primary">
                                 Login
                              </button>
                           </Link>
                        </div>
                     )}
                  </div>
                  <label className="swap swap-rotate">
                     {/* this hidden checkbox controls the state */}
                     <input type="checkbox" onChange={handleMode} />

                     {/* sun icon */}
                     <svg
                        className="swap-on fill-current w-10 h-10 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                     </svg>

                     {/* moon icon */}
                     <svg
                        className="swap-off fill-current text-gray-400 w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                     </svg>
                  </label>
               </div>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
