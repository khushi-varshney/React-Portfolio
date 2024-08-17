import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro.png";
import MinePic from "../assets/mine_pic.jpg";
import {Link} from "react-router-dom";

const HeroImg = () => {

  const onButtonClick = () => {
    const pdfUrl = "Resume_KHUSHI.docx";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
       <div> 
        <p>Hello, This is Khushi Varshney.</p>
        <h1>A Full Stack Web Developer</h1>
        <div>
            <Link to="/skills" className="btn bt1">My Skills</Link>
            <Link><button onClick={onButtonClick} className="btn btn-light bt1">My &nbsp;Resume</button></Link>
        </div>
       </div>
       <div>
          <img className="mine-img" src={MinePic} alt="my Img" />
       </div>
      </div>
    </div>  
  )
}

export default HeroImg
