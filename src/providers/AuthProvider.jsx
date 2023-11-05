import React, { createContext, useState } from 'react';
import  {  getAuth,GithubAuthProvider,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth=getAuth(app);
const provider= new GoogleAuthProvider();
const gitprovider= new GithubAuthProvider();
export  const AuthContext= createContext(null);


const AuthProvider = ({children}) => {
const  [user,setUser]=useState(null);

const [loading,setLoading]=useState(true);

const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth,provider);
}
const GitSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth,gitprovider);
}
const authInfo={user,googleSignIn,loading,GitSignIn}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;