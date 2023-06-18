import React from 'react'
import './about.css'
import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'

const About = () => {
    return(
        <section id='about'>
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={AboutImage} alt="About Image" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item=>(<Card key={item.id} className='about__card'>
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>))
                        }
                    </div>
                    <p>
                    Working as Front End engineer, building and maintaining User Interfaces for TCS Bancs Application.    
                    </p>
                    <p>
                    <h5>Skills</h5>
                    HTML, CSS, JavaScript, ReactJS, Object Oriented Design, Git, Jenkins    
                    </p>
                    <p>
                    <h5>Education</h5>
                    <b>B.Tech in Electrical Engineering</b> -  UIET, MDU Rohtak July 2015 - June 2019
                    <br></br>
                    <b>XII , CBSE - 90% in Science & Mathematics</b> - St. Michael's School at Gurgaon | 2015   
                    </p>
                    <a href={CV} download className='btn primary'>Download CV 
                    <HiDownload/></a>
                </div>
            </div>
        </section>
    )
}

export default About;