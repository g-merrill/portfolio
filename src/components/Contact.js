import React from 'react';
import './css/Contact.scss';

const Contact = ({ handleSubmit, handleChange }) => (
  <div className="w3-padding-64 w3-content w3-text-grey focus-off Contact" id="contact" data-aos="fade-up" data-aos-anchor-placement="top-center">
    <h2 className="w3-text-light-grey">Contact Me</h2>
    <hr style={{ width: '200px' }} className="w3-opacity" />

    <div className="w3-section" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> San Francisco, US</p>
      <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: &nbsp; 510 210 7036</p>
      <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: &nbsp; gmerrill03@gmail.com</p>
    </div>
    <br/>
    <p data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">Lets get in touch. Send me a message:</p>
    <form onSubmit={handleSubmit} data-aos="fade-right" data-aos-anchor-placement="top-bottom">
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required id="name" name="name" onChange={handleChange} /></p>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required id="email" name="email" onChange={handleChange} /></p>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required id="subject" name="subject" onChange={handleChange} /></p>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required id="message" name="message" onChange={handleChange} /></p>
      <p>
        <button className="w3-button w3-light-grey w3-padding-large" type="submit">
          <i className="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>
  </div>
);

export default Contact;