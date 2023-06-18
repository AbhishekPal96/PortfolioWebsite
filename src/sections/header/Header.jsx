import React from 'react'
import './header.css'
import HeaderImage from '../../assets/header.jpg'
import data from './data'

const Header = () => {
  return (
    <header id='header'>
        <div className="container header__container">
          <div className="header__profile">
            <img src={HeaderImage} alt="HeaderImage" />
          </div>
          <h3>Hi :)</h3>
          <p>I'm Abhishek Pal. Software engineer at TCS with 2 years of experience.
            What you are seeing now is portfolio template using react with theme customization.
          </p>
          <div className="header__cta">
            <a href="#contact" className='btn primary'>Let's Talk</a>
            <a href="#portfolio" className='btn'>My Work</a>
          </div>
          <div className="header__socials">
            {data.map(item=><a key={item.id} href={item.link} target='_blank'>{item.icon}</a>)}
          </div>
        </div>
    </header>
    )
}

export default Header;
