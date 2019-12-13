import React from 'react';
import './css/NavSmall.scss';

const NavSmall = ({ setActiveTab }) => (
  // Navbar on small screens (Hidden on medium and large screens)
  <div className="w3-top w3-hide-large w3-hide-medium NavSmall" id="myNavbar">
    <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
      <a onClick={setActiveTab} href="#home" className="nav-btn active-tab mobile-nav-btn w3-button" style={{ width: '25% !important' }}>HOME</a>
      <a onClick={setActiveTab} href="#about" className="nav-btn mobile-nav-btn w3-button" style={{ width: '25% !important' }}>ABOUT</a>
      <a onClick={setActiveTab} href="#skills" className="nav-btn mobile-nav-btn w3-button" style={{ width: '25% !important' }}>SKILLS</a>
      <a onClick={setActiveTab} href="#projects" className="nav-btn mobile-nav-btn w3-button" style={{ width: '25% !important' }}>PROJECTS</a>
      <a onClick={setActiveTab} href="#contact" className="nav-btn mobile-nav-btn w3-button" style={{ width: '25% !important' }}>CONTACT</a>
    </div>
  </div>
);

export default NavSmall;