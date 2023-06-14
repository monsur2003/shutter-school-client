import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const useAxiosSecure = () => {
   const { logout } = useContext(authContext);
   const navigate = useNavigate();

   const axiosSecure = axios.create({
      baseURL: "https://shutter-school-server-monsur776.vercel.app",
   });
   useEffect(() => {
      axiosSecure.interceptors.request.use((config) => {
         const token = localStorage.getItem("access-token");
         if (token) {
            config.headers.Authorization = `Bearer ${token}`;
         }
         return config;
      });

      axiosSecure.interceptors.response.use(
         (response) => response,
         async (error) => {
            if (
               error.response &&
               (error.response.status === 401 || error.response.status === 403)
            ) {
               await logout();
               navigate("/login");
            }
            return Promise.reject(error);
         }
      );
   }, [logout, navigate, axiosSecure]);

   return [axiosSecure];
};

export default useAxiosSecure;
