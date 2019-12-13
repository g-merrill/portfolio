import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';
import NavLarge from './components/NavLarge';
import NavSmall from './components/NavSmall';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends React.Component {

  state = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  setActiveTab = evt => {
    evt.preventDefault();
    let navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(navBtn => navBtn.classList.remove('active-tab'));
    if (evt.target.tagName === 'A') {
      evt.target.classList.toggle('active-tab');
    } else {
      evt.target.parentElement.classList.toggle('active-tab');
    }
  }

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

  scrollAnchors (e, respond = null) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    originalTop > 0 ?
    window.scrollBy({ top: originalTop - 100, left: 0, behavior: 'smooth' }) :
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    let distances = [distanceToTop(targetAnchor)];
    const checkIfDone = setInterval(function() {
      const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
      let newDistanceToTop = distanceToTop(targetAnchor);
      if (newDistanceToTop === distances[0] || newDistanceToTop === 0 || atBottom) {
        targetAnchor.tabIndex = '-1';
        window.history.pushState('', '', targetID);
        clearInterval(checkIfDone);
      }
      distances[0] = newDistanceToTop;
    }, 100);
  }

  scrollTo() {
    const links = document.querySelectorAll('.nav-btn');
    links.forEach(each => (each.onclick = this.scrollAnchors));
  }

  componentDidMount() {
    this.scrollTo();
    AOS.init({ duration: 800, mirror: true });
  }

  render() {
    return (
      <div className='App'>
        <NavLarge setActiveTab={this.setActiveTab} />
        <NavSmall setActiveTab={this.setActiveTab} />
        <div className="w3-padding-large" id="main">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
