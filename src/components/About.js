import React from 'react';
import './css/About.scss';

const About = () => (
  <div className="w3-content w3-justify w3-text-grey w3-padding-64 focus-off About" id="about" data-aos="fade-up" data-aos-anchor-placement="top-center">
    <h2 className="w3-text-light-grey">About Me</h2>
    <hr style={{ width: '200px' }} className="w3-opacity" />
    <p>
      Hi there!  Thanks for checking out my portfolio.  Born and raised in Bakersfield, CA 
      to a big family of seven, I moved to Texas after high school to venture out on my 
      own and to pursue a dream of becoming an engineer.
    </p>
    <p>
      Little did I know that it would 
      take me four years of mechanical engineering in college and four years of forensic 
      engineering in the work field to realize that... I should be doing something else.
      Enter General Assembly and their Software Engineering Immersive.  In just twelve short
      weeks, I've discovered a newfound love for coding and all that software development
      entails.  Armed with only a laptop, I have begun to build a skillset where I can create,
      explore, collaborate with other creative minds, and constantly learn new things in this exciting and ever-evolving industry!  
    </p>
    <p>
      In terms of my current interests: my favorite languages are JavaScript (so versatile) and Python (so clean), 
      and I'm really enjoying the scalability and reusable components of React!
    </p>
  </div>
);

export default About;