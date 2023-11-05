import React, { createContext, useState } from 'react';
import  { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth=getAuth(app);
const provider= new GoogleAuthProvider();
export  const AuthContext= createContext(null);


const AuthProvider = ({children}) => {
const  [user,setUser]=useState(null);

const [loading,setLoading]=useState(true);

const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth,provider);
}
const authInfo={user,googleSignIn,loading}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;