import React, {Component} from 'react'
import homepage from '../images/homepage.png'
import quizapp from '../images/quizapp.png'
import spacedrepetition from '../images/spacedrepetition.png'
import zippal from '../images/zippal.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './projects.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default class Projects extends Component {
  render(){
    return(
      <div className="projects">
        <h2>Projects:</h2>
        <div className="project_wrapper">
          <h3>10,000 hours!</h3>
          <img src={homepage} alt="10,000 hours"/>
          <div className="disc_wrapper">
            <a href="http://ten-thousand-hours.vercel.app/" target="blank">10,000 hours</a>
            <p>10,000 hours is, simply put, a personal goal tracker. Diving a little deeper and this application<br/>
              has potential to become a new social media or crowdfunding platform.</p>
            <h4>Tech Stack:</h4>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>postgreSQL</li>
              </ul>
            <a href="https://github.com/MathewMurray" target="blank"><FontAwesomeIcon icon={faGithub}/>Github Repo</a>
          </div>
        </div>
        <div className="project_wrapper">
          <h3>MTG Quiz app</h3>
          <img src={quizapp} alt="quiz app"/>
          <div className="disc_wrapper">
            <a href="http://quizapp-johnp-matt-m.vercel.app/" target="blank">Quiz app</a>
            <p>The quiz application shown here was a pair project with another student of my thinkful cohort, John Pendergast.</p>
            <h4>Tech Stack:</h4>
              <ul>
                <li>HTML 5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>JQuery</li>
              </ul>
            <a href="https://github.com/MathewMurray/Quizapp-johnp-MattM" target="blank"><FontAwesomeIcon icon={faGithub}/>Github Repo</a>
          </div>
        </div>
        <div className="project_wrapper">
          <h3>Spaced repetition learning app</h3>
          <img src={spacedrepetition} alt="Spaced repetition"/>
          <div className="disc_wrapper">
            <a href="https://spaced-repetition-ochre.vercel.app/register" target="blank">Spaced Repetition</a>
            <p>Another pair program project. This project focused on handling spaced repetition learning.</p>
            <h4>Tech Stack:</h4>
              <ul>
                <li>React</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Node.js</li>
              </ul>
            <a href="https://github.com/MathewMurray/spaced-repetition" target="blank"><FontAwesomeIcon icon={faGithub}/>Github Repo</a>
          </div>
        </div>
        <div className="project_wrapper">
          <h3>Zip Pal</h3>
          <img src={zippal} alt="Zip Pal"/>
          <div className="disc_wrapper">
            <a href="https://zippals.vercel.app/" target="blank">Zip Pal</a>
            <p>Zip Pal is a digital Pen Pal application that was designed, built and launched by my team for our last capstone.
              Some interesting aspects included delayed messages to mimic snail mail and the sticky note design of the entire application. </p>
            <h4>Tech Stack:</h4>
              <ul>
                <li>React</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Node.js</li>
              </ul>
            <a href="https://github.com/thinkful-ei-quail/zippal-client" target="blank"><FontAwesomeIcon icon={faGithub}/>Github Repo</a>
          </div>
        </div>
      </div>
    )
  }
}