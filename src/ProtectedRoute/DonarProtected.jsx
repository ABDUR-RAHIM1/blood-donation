 import React from 'react' 
import { Navigate } from 'react-router-dom'

function DonarProtected({ children }) {

      const isDonarToken = JSON.parse(localStorage.getItem('token'));
  
    return isDonarToken ? children : <Navigate to="/donar-auth" />;
}

export default DonarProtected