import React from 'react' 
import { Navigate } from 'react-router-dom'

function AdminProtected({ children }) {
      const isAdminToken = JSON.parse(localStorage.getItem('token'));
     
    return isAdminToken ? children : <Navigate to="/admin-login" />;
}

export default AdminProtected