import React, { useEffect } from 'react'
import './SkillsStyle.css'


const SkillsSet = () => {

    

  return (
    <div>
      <section id="skills" className='skills'>
        <div className='skill-main'>
            <div className='skill-left'>
                <h3>Technical Skills</h3>
                <div className='skills-bar'>
                    <div className='info'>
                        <p>HTML</p>
                        <p>79%</p>
                    </div>
                    <div className='bar'>
                        <span className='html'></span>
                    </div>
                </div>

                <div className='skills-bar'>
                    <div className='info'>
                        <p>CSS</p>
                        <p>70%</p>
                    </div>
                    <div className='bar'>
                        <span className='css'></span>
                    </div>
                </div>

                <div className='skills-bar'>
                    <div className='info'>
                        <p>Javascript</p>
                        <p>65%</p>
                    </div>
                    <div className='bar'>
                        <span className='javascript'></span>
                    </div>
                </div>

                <div className='skills-bar'>
                    <div className='info'>
                        <p>React JS</p>
                        <p>62%</p>
                    </div>
                    <div className='bar'>
                        <span className='react'></span>
                    </div>
                </div>

                <div className='skills-bar'>
                    <div className='info'>
                        <p>Express JS</p>
                        <p>60%</p>
                    </div>
                    <div className='bar'>
                        <span className='express'></span>
                    </div>
                </div>

                <div className='skills-bar'>
                    <div className='info'>
                        <p>Java</p>
                        <p>73%</p>
                    </div>
                    <div className='bar'>
                        <span className='java'></span>
                    </div>
                </div>

            </div>

            <div className='skill-right'>
            <h3 className="heading1">Proffesional Skills</h3>
                <div className="radial-bar">
                    <div className="radial-bars">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="percentage">90%</div>
                        <div className="text">Communication</div>
                    </div>
                    <div className="radial-bars">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="percentage">70%</div>
                        <div className="text">Problem Solving</div>
                    </div>
                    <div className="radial-bars">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-3" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="percentage">80%</div>
                        <div className="text">Team Work</div>
                    </div>
                    <div className="radial-bars">
                        <svg x="0px" y="0px" viewBox="0 0 200 200">
                            <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                            <circle className="path path-4" cx="100" cy="100" r="80"></circle>
                        </svg>
                        <div className="percentage">85%</div>
                        <div className="text">Creativity</div>
                    </div>
                </div>
                
            </div>
        </div>
      </section>
    </div>
  )
}

export default SkillsSet
