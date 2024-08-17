import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import SkillsSet from '../components/SkillsSet'


const Skills = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="My Skills" text="Currently, I am a React-FrontEnd Developer working towards becoming a Full Stack Web Developer." />
      <SkillsSet />
      <Footer />
    </div>
  )
}

export default Skills
