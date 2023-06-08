import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../assets/authentication/login.png";
import { authContext } from "../../Providers/AuthProvider";

const Login = () => {
   const { googleLogin, signIn } = useContext(authContext);

   const handleGoogle = () => {
      googleLogin()
         .then((result) => {
            console.log(result);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      signIn(email, password)
         .then((result) => {
            const loggedIn = result.user;
            console.log(loggedIn);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <div className="mx-auto min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
         {" "}
         <h1 className="text-center text-5xl font-bold py-6">Please login</h1>
         <div className="  flex gap-x-4 items-center justify-center ">
            <div className="">
               <img src={loginImage} alt="" />
            </div>

            <form
               onSubmit={handleLogin}
               className="w-[40%] h-[50vh] border-2 shadow-lg border-gray-400 p-5 rounded-xl">
               <div>
                  <label htmlFor="email" className="sr-only">
                     Your Email
                  </label>
                  <input
                     id="Email"
                     name="email"
                     type="email"
                     required
                     className="input input-primary w-full my-5"
                     placeholder="Email Address"
                  />
               </div>
               <div>
                  <label htmlFor="password" className="sr-only">
                     Name
                  </label>
                  <input
                     id="password"
                     name="password"
                     type="text"
                     required
                     className="input input-primary w-full"
                     placeholder="password"
                  />
               </div>
               <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-block my-3"
               />
               <button
                  type="button"
                  onClick={handleGoogle}
                  className="btn btn-secondary  w-full mt-2">
                  Login with google
               </button>
               <p>
                  If you are new{" "}
                  <Link to="/register" className="text-orange-400">
                     Sign up
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default Login;
