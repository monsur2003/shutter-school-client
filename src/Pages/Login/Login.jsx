import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImage from "../../assets/authentication/login.png";
import { authContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Title from "../../Components/Title/Title";
import { toast } from "react-hot-toast";

const Login = () => {
   const { googleLogin, signIn } = useContext(authContext);
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);

   const handleTogglePassword = () => {
      setShowPassword(!showPassword);
   };

   const handleGoogle = () => {
      googleLogin()
         .then((result) => {
            const loggedInUser = result.user;

            navigate("/");
            const saveUser = {
               name: loggedInUser.displayName,
               email: loggedInUser.email,
               photoUrl: loggedInUser.photoURL,
               role: "student",
            };
            fetch("http://localhost:5000/users", {
               method: "POST",
               headers: {
                  "content-type": "application/json",
               },
               body: JSON.stringify(saveUser),
            })
               .then((res) => res.json())
               .then((data) => {
                  console.log(data);
                  if (data.insertedId) {
                     Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Account created successfully",
                        showConfirmButton: false,
                        timer: 1500,
                     });
                  }
               });
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
      signIn(email, password)
         .then((result) => {
            Swal.fire({
               position: "center",
               icon: "success",
               title: "Account created successfully",
               showConfirmButton: false,
               timer: 1500,
            });
            navigate("/");
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <div className="mx-auto mt-8 mb-10 px-4 sm:px-6 lg:px-8 bg-gray-100">
         <Title
            heading={"Please Login"}
            subHeading={"Login for explore about our school"}></Title>
         <div className="flex gap-x-4 items-center justify-center">
            <div>
               <img src={loginImage} alt="" />
            </div>
            <form
               onSubmit={handleLogin}
               className="w-[40%] h-[55vh] border-2 shadow-lg border-gray-400 p-5 rounded-xl">
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
                     Password
                  </label>
                  <div className="relative">
                     <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="input input-primary w-full pr-10"
                        placeholder="Password"
                     />
                     <div
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                        onClick={handleTogglePassword}>
                        {showPassword ? (
                           <FaEyeSlash className="font-bold w-[20px] h-[20px] text-gray-600 " />
                        ) : (
                           <FaEye className="font-bold w-[20px] h-[20px] text-gray-600 " />
                        )}
                     </div>
                  </div>
               </div>
               <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-block my-3"
               />
               <button
                  type="button"
                  onClick={handleGoogle}
                  className="btn btn-secondary w-full mt-2">
                  Login with Google
               </button>
               <p className="my-3">
                  If you are new{" "}
                  <Link
                     to="/register"
                     className="text-orange-400 btn-link ml-1 font-semibold">
                     Sign up
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default Login;
