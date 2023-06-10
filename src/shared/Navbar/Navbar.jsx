import { Link } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";
import ActiveLink from "../../Components/ActiveLink/ActiveLink";
import { useContext } from "react";
import { authContext } from "../../Providers/AuthProvider";

const Navbar = () => {
   const { user, logout } = useContext(authContext);
   //    const [cart] = useCart();

   const handleLogout = () => {
      logout();
   };

   const navOption = (
      <>
         <li>
            <ActiveLink to="/">Home</ActiveLink>
         </li>
         <li>
            <ActiveLink to="/instructor">Instructor</ActiveLink>
         </li>

         <li>
            <ActiveLink to="/classes">Classes</ActiveLink>
         </li>

         <li>
            <ActiveLink to="/dashboard">Dashboard</ActiveLink>
         </li>
      </>
   );
   return (
      <div className="navbar text-gray-300 px-9 py-4 bg-[#141447]">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </label>
               <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content  p-2 px-4 shadow  rounded-box w-52">
                  {navOption}
               </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Shutter School</a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOption}</ul>
         </div>
         <div className="navbar-end">
            {user ? (
               <div className="flex items-center gap-3">
                  <div className="tooltip" data-tip={user?.displayName}>
                     <img
                        className="w-[50px] h-[50px] rounded-full"
                        src={user?.photoURL}
                        alt=""
                     />
                  </div>
                  <button onClick={handleLogout} className="btn btn-primary">
                     Sign Out
                  </button>
               </div>
            ) : (
               <Link to="/login">
                  <div className="flex items-center gap-x-2">
                     <FaUserAlt className="text-4xl"></FaUserAlt>
                     <button
                        className="btn btn-primary md:btn-md btn-sm"
                        to="/login">
                        Login
                     </button>
                  </div>
               </Link>
            )}
         </div>
      </div>
   );
};

export default Navbar;
