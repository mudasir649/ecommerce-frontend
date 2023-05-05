import React, { useState } from 'react'
import Footer from '../../../components/Web/footer/Footer'
import Login from '../../../components/Web/Login/Login'
import Navbar from '../../../components/Web/navbar/Navbar'
import NavGrid from '../../../components/Web/NavGrid'
import Register from '../../../components/Web/register/Register'

Footer
function Auth({authValue}) {

  return (
    <div>
         <div>
        <Navbar/>
        <div>
          <NavGrid value={authValue === "login" ? "Login" : "Register"} />
          {authValue === "login" ? <Login /> : <Register />}
        </div>
        <Footer />
    </div>
    </div>
  )
}

export default Auth