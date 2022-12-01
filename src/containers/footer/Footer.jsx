import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const links = ["Overons", "Social Media", "Counters", "Contact"];
const companyInfo = ["Terms & Conditions", "Privacy Policy", "Contact"]
const contactUs = ["Clutch K12 182 BR Alknjkcb", "085-132567", "info@payme.net"]

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Clutch K12 182 BR Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          {links.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          {companyInfo.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          {contactUs.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer