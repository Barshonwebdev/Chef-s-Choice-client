import React, { createContext, useEffect, useState } from 'react';
import  {  createUserWithEmailAndPassword, getAuth,GithubAuthProvider,GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';


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



const createUser=(email,pass)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,pass);
}
const signInEmail=(email,pass)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,pass);
}
const logout=()=>{
    return signOut(auth)
    .then(()=>{console.log('logged out');
})
}

const update=(user,name,url)=>{
    return updateProfile(user,{
        displayName:name,
        photoURL:url
    })
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
    });

    return ()=>{
        return unsubscribe();
    }
},[])

const authInfo={user,googleSignIn,loading,GitSignIn,logout,signInEmail,createUser,update}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;