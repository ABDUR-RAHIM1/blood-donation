import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function DonarProtected({ children }) {
    const [isDonarLogin, setIsDonarLogin] = useState({});

    useEffect(() => {
      const isDonarLoginInfo = JSON.parse(localStorage.getItem('donarLoginInfo'));
      setIsDonarLogin(isDonarLoginInfo);
    }, []); 
  
    return isDonarLogin ? children : <Navigate to="/donar-auth" />;
}

export default DonarProtected