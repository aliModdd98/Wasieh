import React from 'react'
import "./OperationsStyle.css"
import mess from "./../../assets/mess.jpg"
import docu from "./../../assets/docu.png"
import debt from "./../../assets/debt.png"
import cred from "./../../assets/cred.png"
import wasieh from "./../../assets/op1.png"
import apolo from "./../../assets/apol.png"
import { Link } from 'react-router-dom'
export const AllOperation = () => {
    const services=[
        {id:0,
        service:"Wasieh",
        img:wasieh
    
        },{
          id:1,
          service:"Debtors",
          img:debt
        },{
          id:2,
          service:"Creditors",
          img:cred
        },{
          id:3,
          service:"Message",
          img:mess,
        },{id:4,
        service:"Apologies",
        img:apolo
      },{
          id:5,
          service:"Documents",
          img:docu
        }
      ]
    return (
        <section className='bg-gold'>
        <div className='container  mt-5 pt-4'>
      <div className="content">
      <h1>Welcome to our platform!</h1>
          <span>Your privacy and security are our top priorities, and we are dedicated to providing you with the tools and resources you need to safeguard your valuable data. Whether it's personal documents, financial records, or any other sensitive information, you can trust us to keep it safe and accessible only to you and the people you choose to share it with.</span>
         
          <div className="grid">
    {services.map((e) => (
      <Link to={`/services/${e.id}`} key={e.id} className="item">
        <img src={e.img} alt="image" className='imgCard' />
        <h3 className='blackC mt-3'>{e.service}</h3>
      </Link>
    ))}
  </div>
  
      </div>
        </div>
      </section>
  )
}
