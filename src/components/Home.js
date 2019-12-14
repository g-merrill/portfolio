import React from 'react';
import './css/Home.scss';

const Home = () => (
  <header className="w3-container w3-padding-32 w3-center w3-black focus-off Home" id="home">
    <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Greg Merrill</h1>
    <p>Software Engineer</p>
    <img src="https://i.imgur.com/KD4R11W.jpg" alt="greg" className="w3-image" style={{ width: '400px' }} />
  </header>
);

export default Home;