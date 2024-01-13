import React, { useRef } from 'react'
import "./FeaturesStyle.css"
import Title from '../Title/Title'
import img1 from "./../../assets/Fsec.jpg"
import img4 from "./../../assets/Ssec.jpg"
import img2 from "./../../assets/THsec.jpg"
import img3 from "./../../assets/Fosec.jpg"
import { Card } from '../Card/Card'

export const Features = () => {
  
 const featuresList=[{
  id:0,
  title:"Simplify Your Finances with Wasieh",
  desc:"At Wasieh, we understand that managing finances can be complex. That's why we're here to simplify your financial journey. With Wasieh, you can streamline and optimize your financial processes, making every transaction, report, and decision effortless. Our intuitive platform empowers you to take control, providing a comprehensive solution for a more organized and efficient financial life. Experience financial simplicity with Wasieh  where managing your finances becomes a breeze.",
  img:img1, 
},
{
  id:1,
  title:"Effortless Debtors Management",
  desc:"Effortlessly manage your debtors with Wasieh's intuitive and powerful tools. Say goodbye to the complexities of tracking and managing debtor-related tasks. Wasieh streamlines the entire debtor management process, allowing you to easily keep track of outstanding payments, set reminders, and maintain a seamless flow of financial interactions. Our platform is designed to simplify debtor management, providing you with the tools you need to stay organized and in control. Experience the ease of managing debtors with Wasieh – where financial tasks become effortlessly efficient."
  ,img:img2,
},{
  id:2,
  title:"Organize Payables with Ease",
  desc:"Transform the way you handle payables with Wasieh's seamless organizational capabilities. Organizing payables has never been easier. Wasieh empowers you to effortlessly manage and categorize your payables, ensuring a streamlined and efficient process. Say goodbye to the hassle of manual organization – Wasieh provides you with tools to maintain financial stability, track payment deadlines, and foster better relationships with vendors. Enjoy the simplicity of organizing payables with ease, making financial management a stress-free experience.",
  img:img3,
},{
  id:3,
  title:"Document Organization Made Simple",
  desc:"Experience a revolution in document management with Wasieh – where complexity transforms into simplicity. Document Organization Made Simple is not just a tagline; it's a commitment to providing you with a powerful yet user-friendly solution. Wasieh simplifies the way you manage, store, and retrieve documents. Imagine a digital space where your important financial documents are organized with ease, accessible at your fingertips. Wasieh's intuitive platform ensures that every document, from receipts to contracts, is securely stored and efficiently organized. Say goodbye to the clutter and welcome a new era of document management simplicity with Wasieh."
  ,img:img4,
 },
]

const isEven = (id) => id % 2 === 0;
  return (
    <div id='features'  className='container'>
<Title section="Features"/>
{
  featuresList.map((e)=> (
    <Card key={e.id} id={e.id} title={e.title} img={e.img} description={e.desc} />
  ))
}
    </div>
  )
}
