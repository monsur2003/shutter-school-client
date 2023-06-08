import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../../Providers/AuthProvider";
import image1 from "../../assets/authentication/register.png";
import { Link } from "react-router-dom";
const Register = () => {
   const { createUser, updateName, googleLogin } = useContext(authContext);

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm();

   const handleGoogle = () => {
      googleLogin()
         .then((result) => {
            console.log(result);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const onSubmit = (data) => {
      console.log(data);
      createUser(data?.email, data?.password)
         .then((result) => {
            const createdUser = result.user;
            console.log(createdUser);
            updateName(data?.name, data?.photoUrl);
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
         <div>
            <img src={image1} alt="" />
         </div>
         <div className="max-w-md w-full space-y-8">
            <div>
               <h2 className="mt-8 text-center text-3xl font-extrabold text-gray-900">
                  Sign Up
               </h2>
            </div>
            <form
               className="mt-8 border-2 border-gray-400 p-4 rounded-xl shadow-lg space-y-6"
               onSubmit={handleSubmit(onSubmit)}>
               <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                     <label htmlFor="name" className="sr-only">
                        Name
                     </label>
                     <input
                        id="name"
                        name="name"
                        type="text"
                        {...register("name", { required: true })}
                        autoComplete="name"
                        required
                        className="input input-primary w-full"
                        placeholder="Name"
                     />
                  </div>
                  {errors.name && (
                     <span className="text-red-500 text-sm">
                        This field is required
                     </span>
                  )}
                  <div>
                     <label htmlFor="email" className="sr-only">
                        Email address
                     </label>
                     <input
                        id="email"
                        name="email"
                        type="email"
                        {...register("email", { required: true })}
                        autoComplete="email"
                        required
                        className="input input-primary w-full mt-4"
                        placeholder="Email address"
                     />
                  </div>
                  {errors.email && (
                     <span className="text-red-500 text-sm">
                        This field is required
                     </span>
                  )}
                  <div>
                     <label htmlFor="password" className="sr-only">
                        Password
                     </label>
                     <input
                        id="password"
                        name="password"
                        type="text"
                        {...register("password", {
                           required: true,
                           minLength: 6,
                           pattern: {
                              value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/,
                              message:
                                 "Password must be less than 6 characters, not contain capital letters, and not contain special characters",
                           },
                        })}
                        autoComplete="new-password"
                        required
                        className="input input-primary w-full mt-4"
                        placeholder="Password"
                     />
                  </div>
                  {errors.password && (
                     <span className="text-red-500 text-sm">
                        {errors.password.message}
                     </span>
                  )}
                  <div>
                     <label htmlFor="confirmPassword" className="sr-only">
                        Confirm Password
                     </label>
                     <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="text"
                        {...register("confirmPassword", {
                           required: true,
                           validate: (value) =>
                              value === watch("password") ||
                              "Passwords do not match",
                        })}
                        autoComplete="new-password"
                        required
                        className="input input-primary w-full mt-4"
                        placeholder="Confirm Password"
                     />
                  </div>
                  {errors.confirmPassword &&
                     errors.confirmPassword.type === "required" && (
                        <span className="text-red-500 text-sm">
                           This field is required
                        </span>
                     )}
                  {errors.confirmPassword &&
                     errors.confirmPassword.type === "validate" && (
                        <span className="text-red-500 text-sm">
                           {errors.confirmPassword.message}
                        </span>
                     )}
                  <div>
                     <label htmlFor="photoUrl" className="sr-only">
                        Photo URL
                     </label>
                     <input
                        id="photoUrl"
                        name="photoUrl"
                        type="text"
                        {...register("photoUrl")}
                        className="input input-primary w-full mt-4"
                        placeholder="Photo URL"
                     />
                  </div>
               </div>
               <div className="flex items-center flex-col justify-between mt-6">
                  <button type="submit" className="btn btn-primary w-full">
                     Sign Up
                  </button>{" "}
                  <br />
                  <button
                     type="button"
                     onClick={handleGoogle}
                     className="btn btn-secondary  w-full mt-2">
                     Login with google
                  </button>
               </div>
               <p>
                  Already have an account
                  <Link to="/login" className="text-orange-400">
                     Login
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default Register;
