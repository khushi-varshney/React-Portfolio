import React from 'react'
import "./FooterStyles.css";
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color: "#fff", marginRight: "2rem "}} />
                <div>
                    <p>Sanjay Nagar, Bareilly</p>
                    <p>Uttar Pradesh</p>
                </div>
            </div>
            <div className='phone'>
                <h4>
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem "}} /> 8279530928
                </h4>
            </div>
            <div className='email'>
            <h4>
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem "}} /> anuragkhushi703@gmail.com
                </h4>
            </div>
        </div>
        <div className='right'>
            <h4>ABOUT THE COMPANY</h4>
            <p>Hey, I am Khushi Varshney. I am a BTECH 4th YEAR Student. I love Web-Designing and Programming. I am a Java Aspirant as well.</p>
            <div className='social'>
              <Link to="https://www.instagram.com/khushi_varshney07?igsh=MXZ6ZzJqODBjMTF0dw=="> 
                <FaInstagram className='icons' size={40} style={{color: "#fff", marginRight: "1rem ", border: "2px solid pink", padding: ".1rem"}} />
              </Link>  
              <Link to="https://www.linkedin.com/in/khushi-varshney-083242293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin className='icons' size={40} style={{color: "#fff", marginRight: "1rem ", border: "2px solid blue", padding: ".1rem"}} /> 
              </Link>   
              <Link to="https://github.com/khushi-varshney">
                <FaGithub className='icons' size={40} style={{color: "#fff", marginRight: "1rem ", border: "2px solid green", padding: ".1rem"}}/>
              </Link>  
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
