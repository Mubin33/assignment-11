import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import React, { createContext, useEffect, useState } from "react";
import auth from "./Firebase";
import axios from "axios";

  
  export const AuthContext = createContext(null);
  
  const AuthProvider = ({ children }) => {
    let [userInformation, setUserInformation] = useState(null);
    let [afterDelete, setAfterDelete] = useState([]);
    let [loading, setLoading] = useState(true);

  
    const registerUser = async (email, password, displayName, photoURL) => {
      let signup = await createUserWithEmailAndPassword(auth, email, password);
  
      await updateProfile(signup.user, {
        displayName: displayName,
        photoURL: photoURL,
      });
      return signup;
    };
  
    const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const signoutUser = () => {
      return signOut(auth);
    };
  
    const provider = new GoogleAuthProvider();
    const SignInGoogle = () => {
      return signInWithPopup(auth, provider);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUserInformation(user);
        if(user?.email){
          const nowUser={email:user.email}
          axios.post('https://mubins-server-project.vercel.app/jwt', nowUser,{withCredentials:true})
          setLoading(false);
        }else{
          axios.post('https://mubins-server-project.vercel.app/logout', {},{withCredentials:true})
          .then(res=> {
              console.log("user logout and kill the token",res.data)
              setLoading(false);
          })
      }
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    let obj = { 
      registerUser,
      loginUser,
      userInformation,
      loading,
      setLoading,
      setUserInformation,
      signoutUser,
      afterDelete,
      setAfterDelete,
      SignInGoogle, 
    };
    return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
  };
  
  export default AuthProvider;
  