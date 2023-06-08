// import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { authContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
// import useCart from "../../Hook/useCart";

const Navbar = () => {
   //    const { user, logout } = useContext(authContext);
   //    const [cart] = useCart();

   //    const handleLogout = () => {
   //       logout();
   //    };
   //

   const user = false;

   const navOption = (
      <>
         <li>
            <Link to="/">Home</Link>
         </li>
         <li>
            <Link to="/secret">secret</Link>
         </li>

         <li>
            <Link to="/menu">Our Menu</Link>
         </li>

         <li>
            <Link to="/order/category">Order</Link>
         </li>
         <li>
            <Link to="/dashboard">
               <div>
                  <FaShoppingCart className="text-[30px] "></FaShoppingCart>
                  <span className=" text-sm  px-[4px]  absolute top-2 bg-pink-600 rounded-full left-8">
                     +2
                  </span>
               </div>
            </Link>
         </li>

         {user ? (
            <button className="btn btn-ghost"> logout</button>
         ) : (
            <li>
               <Link to="/login">Login</Link>
            </li>
         )}
      </>
   );
   return (
      <div className="navbar scroll-auto fixed mb-10 z-20 bg-opacity-25 text-red-400 px-3 bg-[#101010]">
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
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                  {navOption}
               </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Shutter School</a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOption}</ul>
         </div>
         <div className="navbar-end">
            <a className="btn">Get started</a>
         </div>
      </div>
   );
};

export default Navbar;
