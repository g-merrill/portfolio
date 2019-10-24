import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {

  state = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };


  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit = async evt => {
    evt.preventDefault();
    const templateId = 'template_zorBb3zy';
    await this.sendFeedback(templateId, {subject_html: this.state.subject, message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email});
    this.setState({ name: '', email: '', subject: '', message: '' });
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  }
  
  sendFeedback (templateId, variables) {
    window.emailjs.send( 'gmail', templateId, variables )
    .then(res => {
      console.log('Email successfully sent!')
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
  }

  render() {
    return (
      <>
{/* <!-- Icon Bar (Sidebar - hidden on small screens) --> */}
<nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  {/* <!-- Avatar image in top left corner --> */}
  <img src="https://i.imgur.com/Sj59xHV.jpg" alt="smoke" style={{ width: '100%' }} />
  <a href="/portfolio" className="w3-bar-item w3-button w3-padding-large w3-black">
    <i className="fa fa-home w3-xxlarge"></i>
    <p>HOME</p>
  </a>
  <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i className="fa fa-user w3-xxlarge"></i>
    <p>ABOUT</p>
  </a>
  <a href="#skills" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i className="fa fa-code w3-xxlarge"></i>
    <p>SKILLS</p>
  </a>
  <a href="#projects" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i className="fa fa-eye w3-xxlarge"></i>
    <p>PROJECTS</p>
  </a>
  <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i className="fa fa-envelope w3-xxlarge"></i>
    <p>CONTACT</p>
  </a>
</nav>

{/* <!-- Navbar on small screens (Hidden on medium and large screens) --> */}
<div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="/portfolio" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>HOME</a>
    <a href="#about" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>ABOUT</a>
    <a href="#skills" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>SKILLS</a>
    <a href="#projects" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>PROJECTS</a>
    <a href="#contact" className="w3-bar-item w3-button" style={{ width: '25% !important' }}>CONTACT</a>
  </div>
</div>

{/* <!-- Page Content --> */}
<div className="w3-padding-large" id="main">
  {/* <!-- Header/Home --> */}
  <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
    <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Greg Merrill</h1>
    <p>Software Engineer</p>
    <img src="https://i.imgur.com/UN2oD55.jpg" alt="boy" className="w3-image" style={{ width: '400px' }} />
  </header>

  {/* <!-- About Section --> */}
  <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
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
  <div className="w3-padding-64 w3-content" id="skills">
    <h2 className="w3-text-light-grey">My Skills</h2>
    <hr style={{ width: '200px', paddingBottom: '32px' }} className="w3-opacity" />
    <ul className="w3-wide w3-ul">
      <h5>Languages and Frameworks</h5>
      <div className="w3-third">
        <li className="w3-li gray-bord-bot"></li>
        <li className="w3-li w3-text-white gray-bord-bot">JavaScript</li>
        <li className="w3-li w3-text-white gray-bord-bot">React</li>
        <li className="w3-li w3-text-white add-bord-bot">Python 3</li>
        <li className="w3-li hide-li"></li>
      </div>
      <div className="w3-third">
        <li className="w3-li gray-bord-bot hide-li"></li>
        <li className="w3-li w3-text-white add-bord-bot">Node.js</li>
        <li className="w3-li w3-text-white gray-bord-bot">HTML5</li>
        <li className="w3-li w3-text-white gray-bord-bot">CSS3</li>
        <li className="w3-li hide-li"></li>
      </div>
      <div className="w3-third">
        <li className="w3-li gray-bord-bot hide-li"></li>
        <li className="w3-li w3-text-white gray-bord-bot">Bootstrap</li>
        <li className="w3-li w3-text-white gray-bord-bot">Materialize</li>
        <li className="w3-li w3-text-white gray-bord-bot">VS Code</li>
        <li className="w3-li gray-bord-bot"></li>
      </div>
    </ul>
    <ul className="w3-wide w3-ul">
      <h5 className="w3-col">Server-Side and Database</h5>
      <div className="w3-half">
        <li className="w3-li gray-bord-bot"></li>
        <li className="w3-li w3-text-white gray-bord-bot">Express</li>
        <li className="w3-li w3-text-white gray-bord-bot">PostgreSQL</li>
        <li className="w3-li w3-text-white gray-bord-bot">Mongoose</li>
        <li className="w3-li w3-text-white add-bord-bot">MongoDB</li>
        <li className="w3-li hide-li"></li>
      </div>
      <div className="w3-half">
        <li className="w3-li gray-bord-bot hide-li"></li>
        <li className="w3-li w3-text-white gray-bord-bot">OAuth</li>
        <li className="w3-li w3-text-white gray-bord-bot">Passport</li>
        <li className="w3-li w3-text-white gray-bord-bot">Amazon S3</li>
        <li className="w3-li w3-text-white gray-bord-bot">Heroku</li>
        <li className="w3-li gray-bord-bot"></li>
      </div>
    </ul>
    <ul className="w3-wide w3-ul">
      <h5 className="w3-col">Version Control and Workflow Management</h5>
      <div className="w3-half">
        <li className="w3-li gray-bord-bot"></li>
        <li className="w3-li w3-text-white gray-bord-bot">Git</li>
        <li className="w3-li w3-text-white gray-bord-bot">GitHub</li>
        <li className="w3-li w3-text-white add-bord-bot">Command Line</li>
        <li className="w3-li hide-li"></li>
      </div>
      <div className="w3-half">
        <li className="w3-li gray-bord-bot hide-li"></li>
        <li className="w3-li w3-text-white gray-bord-bot">Trello</li>
        <li className="w3-li w3-text-white gray-bord-bot">InVision</li>
        <li className="w3-li w3-text-white gray-bord-bot">Figma</li>
        <li className="w3-li gray-bord-bot"></li>
      </div>
    </ul>
    <ul className="w3-wide w3-ul">
      <h5 className="w3-col">Methodologies</h5>
      <div className="w3-half">
        <li className="w3-li gray-bord-bot"></li>
        <li className="w3-li w3-text-white gray-bord-bot">ERDs</li>
        <li className="w3-li w3-text-white gray-bord-bot">MVC Pattern</li>
        <li className="w3-li w3-text-white mobile-bord-bot">Object-Oriented Programming</li>
      </div>
      <div className="w3-half">
        <li className="w3-li gray-bord-bot hide-li"></li>
        <li className="w3-li w3-text-white gray-bord-bot">Wireframing</li>
        <li className="w3-li w3-text-white gray-bord-bot">User Stories</li>
        <li className="w3-li w3-text-white gray-bord-bot">Responsive Design</li>
      </div>
    </ul>
    <div className='w3-col add-bord-top' />
    <div className='w3-bar-block'></div>
    <button className="w3-button w3-light-grey w3-padding-large  w3-section">
      <i className="fa fa-download" />
      &nbsp;
      <Link to="/portfolio/files/Gregory_Merrill_Resume.pdf" target="_blank" download>Download Resume</Link>
    </button>
  </div>
  
  {/* <!-- Portfolio Section --> */}
  <div className="w3-padding-64 w3-content" id="projects">
    <h2 className="w3-text-light-grey">My Projects</h2>
    <hr style={{ width: '200px' }} className="w3-opacity" />

    {/* <!-- Grid for projects --> */}
    {/* Use Screenshots from the projects as clickable links to project details */}
    <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
      <div className="w3-half">
        <div className="project-card">
          <h5>Minesweeper</h5>
          <img src="https://i.imgur.com/2TPxzNq.png" alt='minesweeper' style={{ width: '100%' }} />
          <div className="project-link-ctnr">
            <a target='_blank' rel='noopener noreferrer' href='https://g-merrill.github.io/minesweeper/'>
              <i className="fa fa-external-link w3-hover-opacity w3-xxlarge" />
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/g-merrill/minesweeper'>
              <i className="fa fa-github w3-hover-opacity w3-xxlarge" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <h5>truckSFinder</h5>
          <img src="https://i.imgur.com/v5ZeNkw.png" alt='trucksfinder' style={{ width: '100%' }} />
          <div className="project-link-ctnr">
            <a target='_blank' rel='noopener noreferrer' href='https://trucksfinder.herokuapp.com/'>
              <i className="fa fa-external-link w3-hover-opacity w3-xxlarge" />
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/g-merrill/truckSFinder'>
              <i className="fa fa-github w3-hover-opacity w3-xxlarge" />
            </a>
          </div>
        </div>
      </div>
      <div className="w3-half">
        <div className="project-card">
          <h5>Experiences</h5>
          <img src="https://i.imgur.com/oWaG0jA.png" alt='experiences' style={{ width: '100%' }} />
          <div className="project-link-ctnr">
            <a target='_blank' rel='noopener noreferrer' href='https://experiencesapp.herokuapp.com/'>
              <i className="fa fa-external-link w3-hover-opacity w3-xxlarge" />
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/g-merrill/experiences-app'>
              <i className="fa fa-github w3-hover-opacity w3-xxlarge" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <h5>protestNOW</h5>
          <img src="https://i.imgur.com/eb1Bzgb.png" alt='protestnow' style={{ width: '100%' }} />
          <div className="project-link-ctnr">
            <a target='_blank' rel='noopener noreferrer' href='https://protest-now.herokuapp.com/'>
              <i className="fa fa-external-link w3-hover-opacity w3-xxlarge" />
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/g-merrill/protestNOW'>
              <i className="fa fa-github w3-hover-opacity w3-xxlarge" />
            </a>
          </div>
        </div>
      </div>
    {/* <!-- End project grid --> */}
    </div>
  {/* <!-- End Portfolio Section --> */}
  </div>

  {/* <!-- Contact Section --> */}
  <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
    <h2 className="w3-text-light-grey">Contact Me</h2>
    <hr style={{ width: '200px' }} className="w3-opacity" />

    <div className="w3-section">
      <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> San Francisco, US</p>
      <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: &nbsp; 510 210 7036</p>
      <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: &nbsp; gmerrill03@gmail.com</p>
    </div><br/>
    <p>Lets get in touch. Send me a message:</p>

    <form onSubmit={this.handleSubmit}>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required id="name" name="name" onChange={this.handleChange} /></p>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required id="email" name="email" onChange={this.handleChange} /></p>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required id="subject" name="subject" onChange={this.handleChange} /></p>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required id="message" name="message" onChange={this.handleChange} /></p>
      <p>
        <button className="w3-button w3-light-grey w3-padding-large" type="submit">
          <i className="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>
  {/* <!-- End Contact Section --> */}
  </div>
  
    {/* <!-- Footer --> */}
  <footer className="w3-content w3-padding-32 w3-text-grey w3-xlarge">
    <div className='w3-col w3-margin-bottom'>
      <div className='w3-third w3-center'>
        <a target='_blank' rel="noopener noreferrer" href='https://github.com/g-merrill/'>
          <i className="fa fa-github w3-hover-opacity w3-jumbo" />
        </a>
      </div>
      <div className='w3-third w3-center'>
        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/g-merrill/'>
          <i className="fa fa-linkedin w3-hover-opacity w3-jumbo" />
        </a>
      </div>
      <div className='w3-third w3-center'>
        <a target='_blank' rel="noopener noreferrer" href='https://profiles.generalassemb.ly/profiles'>
          <i className="fa fa-certificate w3-hover-opacity w3-jumbo" />
        </a>
      </div>
    </div>
    <p className="w3-medium w3-margin-top w3-right">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel='noopener noreferrer' className="w3-hover-text-green">w3.css</a></p>
  {/* <!-- End footer --> */}
  </footer>

{/* <!-- END PAGE CONTENT --> */}
</div>
      </>
    );
  }
}

export default App;
