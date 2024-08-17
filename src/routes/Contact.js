import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import ContactMe from '../components/ContactMe'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact Me" text="Let's Have A Chat" />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Contact
