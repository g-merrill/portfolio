import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
{/* <!-- Icon Bar (Sidebar - hidden on small screens) --> */}
<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  {/* <!-- Avatar image in top left corner --> */}
  <img src="https://i.imgur.com/Sj59xHV.jpg" alt="smoke" style={{ width: '100%' }} />
  <a href="/portfolio" class="w3-bar-item w3-button w3-padding-large w3-black">
    <i class="fa fa-home w3-xxlarge"></i>
    <p>HOME</p>
  </a>
  <a href="#about" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-user w3-xxlarge"></i>
    <p>ABOUT</p>
  </a>
  <a href="#projects" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-eye w3-xxlarge"></i>
    <p>PROJECTS</p>
  </a>
  <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i class="fa fa-envelope w3-xxlarge"></i>
    <p>CONTACT</p>
  </a>
</nav>

{/* <!-- Navbar on small screens (Hidden on medium and large screens) --> */}
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="/portfolio" class="w3-bar-item w3-button" style={{ width: '25% !important' }}>HOME</a>
    <a href="#about" class="w3-bar-item w3-button" style={{ width: '25% !important' }}>ABOUT</a>
    <a href="#projects" class="w3-bar-item w3-button" style={{ width: '25% !important' }}>PROJECTS</a>
    <a href="#contact" class="w3-bar-item w3-button" style={{ width: '25% !important' }}>CONTACT</a>
  </div>
</div>

{/* <!-- Page Content --> */}
<div class="w3-padding-large" id="main">
  {/* <!-- Header/Home --> */}
  <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
    <h1 class="w3-jumbo"><span class="w3-hide-small">I'm</span> Greg Merrill</h1>
    <p>Software Engineer</p>
    <img src="https://i.imgur.com/UN2oD55.jpg" alt="boy" class="w3-image" style={{ width: '400px' }} />
  </header>

  {/* <!-- About Section --> */}
  <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
    <h2 class="w3-text-light-grey">About Me</h2>
    <hr style={{ width: '200px' }} class="w3-opacity" />
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
      entails.  Armed with only a laptop, I discovered a skillset where I can build, I can 
      explore, I can collaborate with other creative minds, and I can constantly learn new things in this ever-evolving industry!  
    </p>
    <p>
      In terms of my current capabilities: my favorite languages to work in are JavaScript (so versatile) and Python (so clean), 
      and I'm really enjoying the scalability and reusable components of React!
    </p>
    <h3 class="w3-padding-16 w3-text-light-grey">My Skills</h3>
    <ul class="w3-wide w3-ul">
      <h5>Languages and Frameworks</h5>
      <div class="w3-third">
        <li class="w3-li"></li>
        <li class="w3-li">JavaScript</li>
        <li class="w3-li">React</li>
        <li class="w3-li">Python 3</li>
        <li class="w3-li hide-li"></li>
      </div>
      <div class="w3-third">
        <li class="w3-li"></li>
        <li class="w3-li">HTML5</li>
        <li class="w3-li">CSS3</li>
        <li class="w3-li">jQuery</li>
        <li class="w3-li hide-li"></li>
      </div>
      <div class="w3-third">
        <li class="w3-li"></li>
        <li class="w3-li">Bootstrap</li>
        <li class="w3-li">Materialize</li>
        <li class="w3-li">VS Code</li>
        <li class="w3-li"></li>
      </div>
    </ul>
    <ul class="w3-wide w3-ul">
      <h5>Server-Side and Database</h5>
      <div class="w3-half">
        <li class="w3-li"></li>
        <li class="w3-li">Express</li>
        <li class="w3-li">PostgreSQL</li>
        <li class="w3-li">Mongoose</li>
        <li class="w3-li">MongoDB</li>
        <li class="w3-li hide-li"></li>
      </div>
      <div class="w3-half">
        <li class="w3-li"></li>
        <li class="w3-li">OAuth</li>
        <li class="w3-li">Passport</li>
        <li class="w3-li">Amazon S3</li>
        <li class="w3-li hide-li">&nbsp;</li>
        <li class="w3-li"></li>
      </div>
    </ul>
    <ul class="w3-wide w3-ul">
      <h5>Version Control and Workflow Management</h5>
      <div class="w3-half">
        <li class="w3-li"></li>
        <li class="w3-li">Git</li>
        <li class="w3-li">GitHub</li>
        <li class="w3-li">Command Line</li>
        <li class="w3-li hide-li"></li>
      </div>
      <div class="w3-half">
        <li class="w3-li"></li>
        <li class="w3-li">Trello</li>
        <li class="w3-li">InVision</li>
        <li class="w3-li">&nbsp;</li>
        <li class="w3-li hide-li"></li>
      </div>
    </ul>
    <ul class="w3-wide w3-ul">
      <h5>Methodologies</h5>
      <div class="w3-half">
        <li class="w3-li"></li>
        <li class="w3-li">ERDs</li>
        <li class="w3-li">MVC Pattern</li>
        <li class="w3-li">Object-Oriented Programming</li>
      </div>
      <div class="w3-half">
        <li class="w3-li hide-li"></li>
        <li class="w3-li">Wireframing</li>
        <li class="w3-li">User Stories</li>
        <li class="w3-li">Responsive Design</li>
      </div>
    </ul>
    <br/>

    <button class="w3-button w3-light-grey w3-padding-large w3-section">
      <i class="fa fa-download"></i> Download Resume
    </button>
  </div>
  
  {/* <!-- Portfolio Section --> */}
  <div class="w3-padding-64 w3-content" id="projects">
    <h2 class="w3-text-light-grey">My Projects</h2>
    <hr style={{ width: '200px' }} class="w3-opacity" />

    {/* <!-- Grid for projects --> */}
    {/* Use Screenshots from the projects as clickable links to project details */}
    <div class="w3-row-padding" style={{ margin: '0 -16px' }}>
      <div class="w3-half">
        <img src="/w3images/wedding.jpg" alt='wedding' style={{ width: '100%' }} />
        <img src="/w3images/rocks.jpg" alt='rocks' style={{ width: '100%' }} />
        <img src="/w3images/sailboat.jpg" alt='sailboat' style={{ width: '100%' }} />
      </div>

      <div class="w3-half">
        <img src="/w3images/underwater.jpg" alt='underwater' style={{ width: '100%' }} />
        <img src="/w3images/chef.jpg" alt='chef' style={{ width: '100%' }} />
        <img src="/w3images/wedding.jpg" alt='wedding' style={{ width: '100%' }} />
        <img src="/w3images/p6.jpg" alt='p6' style={{ width: '100%' }} />
      </div>
    {/* <!-- End project grid --> */}
    </div>
  {/* <!-- End Portfolio Section --> */}
  </div>

  {/* <!-- Contact Section --> */}
  <div class="w3-padding-64 w3-content w3-text-grey" id="contact">
    <h2 class="w3-text-light-grey">Contact Me</h2>
    <hr style={{ width: '200px' }} class="w3-opacity" />

    <div class="w3-section">
      <p><i class="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> San Francisco, US</p>
      <p><i class="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: &nbsp; 510 210 7036</p>
      <p><i class="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: &nbsp; gmerrill03@gmail.com</p>
    </div><br/>
    <p>Lets get in touch. Send me a message:</p>

    <form action="/action_page.php" target="_blank">
      <p><input class="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
      <p><input class="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email" /></p>
      <p><input class="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject" /></p>
      <p><input class="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message" /></p>
      <p>
        <button class="w3-button w3-light-grey w3-padding-large" type="submit">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>
  {/* <!-- End Contact Section --> */}
  </div>
  
    {/* <!-- Footer --> */}
  <footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
    <i class="fa fa-github w3-hover-opacity"></i>
    &nbsp;&nbsp;&nbsp;
    <i class="fa fa-linkedin w3-hover-opacity"></i>
    &nbsp;&nbsp;&nbsp;
    <i class="fa fa-certificate w3-hover-opacity"></i>
    <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel='noopener noreferrer' class="w3-hover-text-green">w3.css</a></p>
  {/* <!-- End footer --> */}
  </footer>

{/* <!-- END PAGE CONTENT --> */}
</div>
      </>
    );
  }
}

export default App;
