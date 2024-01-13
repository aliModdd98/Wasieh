import React from 'react'
import "./ContactStyle.css"
import logo from "./../../assets/wasiehLogo.png"
import { NavBar } from '../NavBar/NavBar'
export const Contact = () => {
  return (
    <section className='myContainerStyle'>
     <div className='container'>
        <NavBar/>
        <img src={logo} alt='Logo' style={{ maxHeight: '100px', width: '130px' }}/>
       <h3>Contact Information:</h3>
    <ul>
        <li className='noPoint'>Acme Corporation</li>
        <li className='noPoint'>123 Main Street</li>
        <li className='noPoint'>Anytown, USA</li>
        <li className='noPoint'>Phone: 555-123-4567</li>
        <li className='noPoint'>Email: info@acmecorp.com</li>
        <li className='noPoint'>Website: www.acmecorp.com</li>
    </ul>
        </div>
   </section>
  )
}
