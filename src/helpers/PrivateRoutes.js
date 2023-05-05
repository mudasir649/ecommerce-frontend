import React, { useContext } from 'react'
import { Routes, Navigate } from 'react-router-dom'
import { DarkModeContext } from '../context/DarkModeContext'
function PrivateRoutes({children}) {
    const { user } = useContext(DarkModeContext);
  return user !== null ? 
  <>
    <Routes>
      {children}
    </Routes>
  </> : <>
  <Navigate to="/" /></>
}

export default PrivateRoutes