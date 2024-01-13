import React from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { Hero } from '../components/Hero/Hero'
import { Features } from '../components/Features/Features'
import { AfterDeath } from '../components/AfterDeath/AfterDeath'
import { Footer } from '../components/Footer/Footer'

export const LandingPage = () => {
  return (
    <div >
        <NavBar/>
        <Hero/>
        <Features/>
        <AfterDeath/>
        <Footer/>
    </div>
  )
}
