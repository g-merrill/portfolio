import React from 'react';
import './css/Projects.scss';

const Projects = () => (
  <div className="w3-padding-64 w3-content focus-off Projects" id="projects">
    <h2 className="w3-text-light-grey" data-aos="fade-up" data-aos-anchor-placement="top-center">My Projects</h2>
    <hr style={{ width: '200px' }} className="w3-opacity" data-aos="fade-up" data-aos-anchor-placement="top-center" />
    {/* <!-- Grid for projects --> */}
    <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
      <div className="w3-half">
        <div className="project-card">
          <h5 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" >Minesweeper</h5>
          <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src="https://i.imgur.com/2TPxzNq.png" alt='minesweeper' className="project-img" />
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="project-description">For SEI Project 1, I built my own version of the classic game, Minesweeper.</p>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="project-description">The main technologies used for this project were: HTML, CSS, and JavaScript.</p>
          <div className="project-link-ctnr">
            <a target='_blank' rel='noopener noreferrer' href='https://g-merrill.github.io/minesweeper/'>
              <i className="fa fa-external-link w3-xxlarge icon-hover" />
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/g-merrill/minesweeper'>
              <i className="fa fa-github w3-xxlarge icon-hover" />
            </a>
          </div>
        </div>
      </div>
      <div className="w3-half">
        <div className="project-card">
          <h5 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" >truckSFinder</h5>
          <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src="https://i.imgur.com/v5ZeNkw.png" alt='trucksfinder' className="project-img" />
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="project-description">For SEI Project 2, I collaborated with a UX design student to make an app focused on finding and reviewing local SF food trucks.</p>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="project-description">The main technologies used for this project were: Node, Express, EJS, MongoDB, Mongoose, and OAuth.</p>
          <div className="project-link-ctnr">
            <a target='_blank' rel='noopener noreferrer' href='https://trucksfinder.herokuapp.com/'>
              <i className="fa fa-external-link w3-xxlarge icon-hover" />
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/g-merrill/truckSFinder'>
              <i className="fa fa-github w3-xxlarge icon-hover" />
            </a>
          </div>
        </div>
      </div>
      <div className="w3-half">
        <div className="project-card">
          <h5 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" >Experiences</h5>
          <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src="https://i.imgur.com/oWaG0jA.png" alt='experiences' className="project-img" />
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="project-description">For SEI Project 3, I worked with 2 other dev students to create a marketplace app for local experiences or activities.</p>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="project-description">The main technologies used for this project were: Python, Django, PostgreSQL, and Bootstrap.</p>
          <div className="project-link-ctnr">
            <a target='_blank' rel='noopener noreferrer' href='https://experiencesapp.herokuapp.com/'>
              <i className="fa fa-external-link w3-xxlarge icon-hover" />
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/g-merrill/experiences-app'>
              <i className="fa fa-github w3-xxlarge icon-hover" />
            </a>
          </div>
        </div>
      </div>
      <div className="w3-half">
        <div className="project-card">
          <h5 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" >protestNOW</h5>
          <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src="https://i.imgur.com/eb1Bzgb.png" alt='protestnow' className="project-img" />
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="project-description">For SEI Project 4, I created an app where protestors could share their stories with others.</p>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="project-description">The main technologies used for this project were: React, Node, Express, MongoDB, and JSON Web Token authentication.</p>
          <div className="project-link-ctnr">
            <a target='_blank' rel='noopener noreferrer' href='https://protest-now.herokuapp.com/'>
              <i className="fa fa-external-link w3-xxlarge icon-hover" />
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/g-merrill/protestNOW'>
              <i className="fa fa-github w3-xxlarge icon-hover" />
            </a>
          </div>
        </div>
      </div>
      <div className="w3-half">
        <div className="project-card">
          <h5 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" >Humans of New York API</h5>
          <video className="project-img" data-aos="fade-up" data-aos-anchor-placement="center-bottom" alt='hony api' autoPlay loop>
            <source type="video/mp4" src="https://thumbs.gfycat.com/RequiredIllfatedBoutu-mobile.mp4" />
          </video>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="project-description">For my first post-GA project, I created an app where developers can search and access Humans of New York content based on a story's content, location, or date published.  The API provides a links to the hosted endpoint which returns the desired JSON data.</p>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="project-description">The main technologies used for this project were: React, Flask, Python, PostgreSQL, SQLAlchemy, and Heroku.</p>
          <div className="project-link-ctnr">
            <a target='_blank' rel='noopener noreferrer' href='https://hony.herokuapp.com/'>
              <i className="fa fa-external-link w3-xxlarge icon-hover" />
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/g-merrill/hony'>
              <i className="fa fa-github w3-xxlarge icon-hover" />
            </a>
          </div>
        </div>
      </div>
      <div className="w3-half">
        <div className="project-card">
          <h5 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" >Personal Portfolio Site</h5>
          <video className="project-img" data-aos="fade-up" data-aos-anchor-placement="center-bottom" alt='portfolio site' autoPlay loop>
            <source type="video/mp4" src="https://thumbs.gfycat.com/VillainousActualIbadanmalimbe-mobile.mp4" />
          </video>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="project-description">Meta right?  But I did in fact make this site from scratch too!</p>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="project-description">The main technologies used for this portfolio are: React, JavaScript, Sass, HTML5, and GitHub Pages</p>
          <div className="project-link-ctnr">
            <p className='already-here'>You're already here!</p>
            <i className="fa fa-external-link w3-xxlarge pf-link" />
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/g-merrill/portfolio'>
              <i className="fa fa-github w3-xxlarge icon-hover" />
            </a>
          </div>
        </div>
      </div>
    {/* <!-- End project grid --> */}
    </div>
  </div>
);

export default Projects;