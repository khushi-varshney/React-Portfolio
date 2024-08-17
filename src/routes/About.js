import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import Abouts from '../components/Abouts'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="All About Me" text="I am a Hard-Working and Driven Individual." />
      <Abouts />
      <Footer />
    </div>
  )
}

export default About
