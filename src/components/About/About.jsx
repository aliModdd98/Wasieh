import React from 'react'
import logo from "./../../assets/wasiehLogo.png"
import "./AboutStyle.css"
import { NavBar } from '../NavBar/NavBar'
export const About = () => {
  return (
   <section className='myContainerStyle'>
     <div className='container'>
        <NavBar/>
        <img src={logo} alt='Logo' style={{ maxHeight: '100px', width: '130px' }}/>
       <h3>Legacy Preservation and Financial Well-being</h3>
<p>Our website is dedicated to empowering individuals to document their financial information, debts, and creditors, as well as preserving important documents for their loved ones. Whether it's managing finances during life or ensuring a smooth transition after passing, we provide the tools and resources to help you write well and safeguard your legacy.</p>

        </div>
   </section>
  )
}
