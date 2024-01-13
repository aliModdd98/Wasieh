import React, { useEffect, useState } from 'react'
import img1 from "./../../assets/img1.jpg"
import "./HeroStyle.css"
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
export const Hero = () => {
  Aos.init();
 return (
   <section className='mt-5'>
   <div className="container">
   <div data-aos="zoom-in" className='row mt-5 mb-5 d-flex justify-content-center align-items-center'>
      <div className="mt-5 col-lg-6 col-md-12 d-flex flex-column ps-4 py-5 left">
      <h1>Secure Your Financial Journey, Today and Beyond</h1>
      <p className='px-3 mt-4'><FaQuoteLeft className='icon'/> Well safeguards your financial operations with debtors, creditors, and ensures a smooth transition of your financial legacy to loved ones after you're gone.<FaQuoteRight className='icon'/></p>
      <Link to="/login"><button className='btnB mt-4'>
  Plan for Tomorrow, Today
  </button></Link>
  </div>
  <div className='col-lg-6 col-md-12 mt-5 ps-2 pt-4 d-flex align-items-center'>

    <img src={img1} className='img animationImg' alt="Well"/>
  </div>
        </div>
   </div>
   </section>
  )
}
