import React from 'react';
import './css/Footer.scss';

const Footer = () => (
  <footer className="w3-content w3-text-grey w3-xlarge Footer" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
    <div className='w3-col footer-link-ctnr'>
      <div className='w3-third w3-center'>
        <a target='_blank' rel="noopener noreferrer" href='https://github.com/g-merrill/'>
          <i className="fa fa-github w3-jumbo icon-hover footer-icon" />
        </a>
      </div>
      <div className='w3-third w3-center'>
        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/g-merrill/'>
          <i className="fa fa-linkedin w3-jumbo icon-hover footer-icon" />
        </a>
      </div>
      <div className='w3-third w3-center'>
        <a target='_blank' rel="noopener noreferrer" href='https://profiles.generalassemb.ly/profiles/g-merrill'>
          <i className="fa fa-certificate w3-jumbo icon-hover footer-icon" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;