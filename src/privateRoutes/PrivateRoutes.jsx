import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    let location= useLocation();
    if(loading){
        return <small>Loading...</small>
    }
    if (user) {
      return children;
    }

    return <Navigate to='/login' replace state={{from:location}}></Navigate>
};

export default PrivateRoutes;