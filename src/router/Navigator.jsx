import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { Login } from '../components/Login/Login';
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';
import { ServiceDetails } from '../components/AllOperations/ServiceDetails';
import {AllOperation} from "./../components/AllOperations/AllOperation"
import { NavBar } from '../components/NavBar/NavBar';
export const Navigator = () => {
  return (
    <>
     <Routes >
         <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/services" element={
        <><NavBar/>
        <AllOperation /></>} />
        <Route path="/services/:id" element={
       <>
       <NavBar/>
       <ServiceDetails />
       </>} />
        <Route path="*" element={<LandingPage />} />
        </Routes></>
  )
}
