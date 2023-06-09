import React, { createContext, useEffect, useState } from "react";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// import axios from "axios";

export const authContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loader, setLoader] = useState(true);

   //    user creator funtion
   const createUser = (email, password) => {
      setLoader(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // user login function
   const signIn = (email, password) => {
      setLoader(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   //  update name and profile of user
   const updateName = (name, photo) => {
      updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo,
      });
   };

   // google login function
   const googleLogin = () => {
      setLoader(true);
      return signInWithPopup(auth, googleProvider);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoader(false);
         console.log("userfrom ", currentUser);
         //  if (currentUser) {
         //     axios
         //        .post("http://localhost:3000/jwt", {
         //           email: currentUser.email,
         //        })
         //        .then((data) => {
         //           console.log(data.data.token);
         //           localStorage.setItem("access_token", data.data.token);
         //        });
         //  } else {
         //     localStorage.removeItem("access_token");
         //  }
      });
      return () => {
         return unSubscribe();
      };
   }, []);

   // logout function
   const logout = () => {
      setLoader(true);
      return signOut(auth);
   };

   const authInfo = {
      user,
      loader,
      createUser,
      signIn,
      logout,
      googleLogin,
      updateName,
   };

   return (
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
   );
};

export default AuthProvider;
