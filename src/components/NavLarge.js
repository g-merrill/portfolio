import React from 'react';
import './css/NavLarge.scss';

const NavLarge = ({ setActiveTab }) => (
  // Icon Bar (Sidebar - hidden on small screens)
  <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
    {/* Avatar image in top left corner */}
    <img src="https://i.imgur.com/Sj59xHV.jpg" alt="smoke" style={{ width: '100%' }} />
    <a onClick={setActiveTab} href="#home" className="nav-btn web-nav-btn active-tab w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-home w3-xxlarge"></i>
      <p>HOME</p>
    </a>
    <a onClick={setActiveTab} href="#about" className="nav-btn web-nav-btn w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-user w3-xxlarge"></i>
      <p>ABOUT</p>
    </a>
    <a onClick={setActiveTab} href="#skills" className="nav-btn web-nav-btn w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-code w3-xxlarge"></i>
      <p>SKILLS</p>
    </a>
    <a onClick={setActiveTab} href="#projects" className="nav-btn web-nav-btn w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-eye w3-xxlarge"></i>
      <p>PROJECTS</p>
    </a>
    <a onClick={setActiveTab} href="#contact" className="nav-btn web-nav-btn w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-envelope w3-xxlarge"></i>
      <p>CONTACT</p>
    </a>
  </nav>
);

export default NavLarge;