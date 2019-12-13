import React from 'react';
import { Link } from 'react-router-dom';
import './css/Skills.scss';

const Skills = () => (
  <div className="w3-padding-64 w3-content focus-off Skills" id="skills" data-aos="fade-up" data-aos-anchor-placement="top-center">
    <h2 className="w3-text-light-grey">My Skills</h2>
    <hr style={{ width: '200px', paddingBottom: '32px' }} className="w3-opacity" />
    <ul className="w3-wide w3-ul">
      <h5 className="w3-col w3-text-gray" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Languages and Frameworks</h5>
      <div className="w3-third" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <li className="w3-li gray-bord-bot"></li>
        <li className="w3-li w3-text-white gray-bord-bot">JavaScript</li>
        <li className="w3-li w3-text-white gray-bord-bot">React</li>
        <li className="w3-li w3-text-white add-bord-bot">Python 3</li>
        <li className="w3-li hide-li"></li>
      </div>
      <div className="w3-third" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
        <li className="w3-li gray-bord-bot hide-li"></li>
        <li className="w3-li w3-text-white add-bord-bot">Node.js</li>
        <li className="w3-li w3-text-white gray-bord-bot">HTML5</li>
        <li className="w3-li w3-text-white gray-bord-bot">CSS3</li>
        <li className="w3-li hide-li"></li>
      </div>
      <div className="w3-third" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="600">
        <li className="w3-li gray-bord-bot hide-li"></li>
        <li className="w3-li w3-text-white gray-bord-bot">Bootstrap</li>
        <li className="w3-li w3-text-white gray-bord-bot">Materialize</li>
        <li className="w3-li w3-text-white gray-bord-bot">VS Code</li>
        <li className="w3-li gray-bord-bot"></li>
      </div>
    </ul>
    <ul className="w3-wide w3-ul">
      <h5 className="w3-col w3-text-gray" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Server-Side and Database</h5>
      <div className="w3-half" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <li className="w3-li gray-bord-bot"></li>
        <li className="w3-li w3-text-white gray-bord-bot">Express</li>
        <li className="w3-li w3-text-white gray-bord-bot">PostgreSQL</li>
        <li className="w3-li w3-text-white gray-bord-bot">Mongoose</li>
        <li className="w3-li w3-text-white add-bord-bot">MongoDB</li>
        <li className="w3-li hide-li"></li>
      </div>
      <div className="w3-half" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
        <li className="w3-li gray-bord-bot hide-li"></li>
        <li className="w3-li w3-text-white gray-bord-bot">OAuth</li>
        <li className="w3-li w3-text-white gray-bord-bot">Passport</li>
        <li className="w3-li w3-text-white gray-bord-bot">Amazon S3</li>
        <li className="w3-li w3-text-white gray-bord-bot">Heroku</li>
        <li className="w3-li gray-bord-bot"></li>
      </div>
    </ul>
    <ul className="w3-wide w3-ul">
      <h5 className="w3-col w3-text-gray" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Version Control and Workflow Management</h5>
      <div className="w3-half" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <li className="w3-li gray-bord-bot"></li>
        <li className="w3-li w3-text-white gray-bord-bot">Git</li>
        <li className="w3-li w3-text-white gray-bord-bot">GitHub</li>
        <li className="w3-li w3-text-white add-bord-bot">Command Line</li>
        <li className="w3-li hide-li"></li>
      </div>
      <div className="w3-half" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
        <li className="w3-li gray-bord-bot hide-li"></li>
        <li className="w3-li w3-text-white gray-bord-bot">Trello</li>
        <li className="w3-li w3-text-white gray-bord-bot">InVision</li>
        <li className="w3-li w3-text-white gray-bord-bot">Figma</li>
        <li className="w3-li gray-bord-bot"></li>
      </div>
    </ul>
    <ul className="w3-wide w3-ul">
      <h5 className="w3-col w3-text-gray" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Methodologies</h5>
      <div className="w3-half" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <li className="w3-li gray-bord-bot"></li>
        <li className="w3-li w3-text-white gray-bord-bot">ERDs</li>
        <li className="w3-li w3-text-white gray-bord-bot">MVC Pattern</li>
        <li className="w3-li w3-text-white mobile-bord-bot">Object-Oriented Programming</li>
      </div>
      <div className="w3-half" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
        <li className="w3-li gray-bord-bot hide-li"></li>
        <li className="w3-li w3-text-white gray-bord-bot">Wireframing</li>
        <li className="w3-li w3-text-white gray-bord-bot">User Stories</li>
        <li className="w3-li w3-text-white gray-bord-bot">Responsive Design</li>
      </div>
    </ul>
    <div className='w3-col add-bord-top' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"/>
    <div className='w3-bar-block'></div>
    <button className="w3-button w3-light-grey w3-padding-large  w3-section" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <i className="fa fa-download" />
      &nbsp;
      <Link to="/portfolio/files/Gregory_Merrill_Resume.pdf" target="_blank" download>Download Resume</Link>
    </button>
  </div>
);

export default Skills;