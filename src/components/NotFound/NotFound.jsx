import React from 'react'
import LOGO from "./../../assets/wasiehLogo.png"
export const NotFound = () => {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center '>
        <img src={LOGO} alt='Wasieh' style={{ maxHeight: '80px', width: '100px' }}/>
       <h1> Page Not Found</h1></div>
  )
}
