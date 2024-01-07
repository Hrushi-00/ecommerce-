import "./FooterStyle.css"

import React from 'react';
import { Link } from "react-router-dom";

import{FaHome, FaPhone ,FaMailBulk, FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{color:"#000000",marginRight:"2rem"}}/>
      <div style={{color:"#00000"}}>
        <p>Warje,Pune</p>
        <p>India</p>
      </div>
      </div>

      <div className="phone">
        <h4><FaPhone size={20} style={{color:"#000000",marginRight:"2rem"}} />
         9172747319</h4>
      </div>
     
      <div className="email">
        <h4><FaMailBulk size={20} style={{color:"#000000 ",marginRight:"2rem"}} />
         hrushikeshskapse@gmail.com</h4>
      </div>
        </div>
      


      <div className="right">

        <h4>About</h4>
        <p>This is me Hrushikesh Kapse.I enjoy discussing new project and design challenges</p>
        <div className="social">
        <Link to="https://www.linkedin.com/in/hrushikesh-kapse/" target="blank"><FaLinkedin size={30} style={{color:"#000000",marginRight:"1rem"}} /></Link>
        <Link to="https://github.com/Hrushi-00"  target="blank"><FaGithub size={30} style={{color:"#000000",marginRight:"1rem"}} /></Link>
        <Link to="https://www.instagram.com/__r_kapse__?igsh=NGVhN2U2NjQ0Yg==" target="blank"><FaInstagram size={30} style={{color:"#000000",marginRight:"1rem"}} /></Link>
       
        
        </div>
      </div>
    </div>
        </div>
  )
}

export default Footer
