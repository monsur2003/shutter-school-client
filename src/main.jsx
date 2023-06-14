import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <HelmetProvider>
            <QueryClientProvider client={queryClient}>
               <div className="bg-base-300">
                  <RouterProvider router={router}></RouterProvider>
               </div>
            </QueryClientProvider>
            <Toaster />
         </HelmetProvider>
      </AuthProvider>
   </React.StrictMode>
);
