import React from 'react'
import './footer.css'
import {links,socials} from './data'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
          <ul className='nav__menu'>
            {
              links.map(fLink => <li key={fLink.id}><a href={fLink.link}>{fLink.title}</a></li>)
            }  
          </ul> 
          <div className="footer__socials">
            {
              socials.map(social => <a key={social.id} href={social.link} target='_blank'
              rel='noopener noreferrer'>{social.icon}</a>)
            }  
          </div>
          <div className="footer__copyright">
            <small>Responsive Portfolio &copy; All Rights Reserved</small>  
          </div>  
        </div>     
    </footer>
  )
}

export default Footer;
