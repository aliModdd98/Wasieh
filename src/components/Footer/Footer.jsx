import React from 'react'
import "./FooterStyle.css"
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

export const Footer = () => {
  return (
      <section className='my-container'>
     <div className='container '>
     <div className="row footer mt-5 d-flex flex-column justify-content-between align-items-center">
         
       
        <div className="col-lg-12 col-md-12 ps-3  mt-5 d-flex justify-content-center align-items-center flex-column">
             <div className="row ">
             <div className="col-lg-6 col-md-12 borderBox  d-flex justify-content-end flex-column align-items-center ps-3">
                <form >
<h3 className='titleW mb-3 pb-5'>Send your Suggestion</h3>
                <div className="row d-flex flex-column  align-items-center ">
  <div className="col">
    <input type="text" className="form-control mb-3" placeholder="Name" />
  </div>
  <div className="col">
    <input type="text" className="form-control mb-3" placeholder="Email" />
  </div>
  <div className='row  mb-3'>
      <textarea
        rows={4} 
        className='tarea ps-2'
        cols={50} 
        placeholder="Type your text here..."
      />
    
      </div>
      <button className='btnblack'>Send Message</button>
</div>
                </form>
            </div>

              <div className="col mx-4 mt-3 pt-4">
              <h4>Wasieh</h4>
              <p className='descStyle'><ImQuotesLeft className='iconStyle'/> Save time, money, and stress with organized records and efficient processes for your debts, documents, and more.<ImQuotesRight className='iconStyle'/></p>
              <div className="d-flex flex-row mt-4"> 
             <span className='iconAnimation'><FaFacebookF className='iconS'/></span>
              <span className='iconAnimation'><FaLinkedinIn  className='iconS'/></span>
              <span className='iconAnimation'><FaXTwitter  className='iconS'/></span>
              <span className='iconAnimation'><SiInstagram  className='iconS'/></span>
              <span className='iconAnimation'><FaTelegramPlane  className='iconS'/></span></div>
              <div className="mt-4 d-flex justify-content-center flex-column">
             <ul>
             <li className='noPoint'><FaLocationDot className='iconS'/>New York, NY 10012, US</li>
              <li className='noPoint'><HiOutlineMail className='iconS'/>info@example.com</li>
              <li className='noPoint'><FaPhoneFlip className='iconS'/>+ 01 234 567 88</li>
              <li className='noPoint'><FaFax className='iconS'/>+ 01 234 567 89</li>

             </ul>
             </div>
           
          
            </div> </div>
                
           

            </div>

      
        </div>
            <div className="row copyRights d-flex align-items-end">
          <p>Copyright © 2023 <span className='wText'>Soft-Tag Co.</span>, Ltd. All Rights Reserved.</p>
        </div>
        </div>
  </section>
  )
}
