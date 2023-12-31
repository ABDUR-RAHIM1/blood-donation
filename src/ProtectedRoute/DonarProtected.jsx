 import React from 'react' 
 import { Navigate , Outlet } from 'react-router-dom'

function DonarProtected() {

      const isDonarToken = JSON.parse(localStorage.getItem('token'));
  
    return isDonarToken ? <Outlet/> : <Navigate to="/auth" />;
}

export default DonarProtected