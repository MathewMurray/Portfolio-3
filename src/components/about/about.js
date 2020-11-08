import React, {Component} from 'react'
import profile from '../images/profile.jpg'
import './about.css'
import {Link} from 'react-router-dom'

export default class About extends Component {
  render(){
    return(
      <div className="about">
        <div className="about_wrapper">
          <div className="profile_image">
            <img src={profile} alt='Mathew Murray'/>
          </div>
          <div className="profile_info">
            <h1>Who am I?</h1>
            <p>I'm Mathew Murray, a web developer hailing from Lancaster,
              PA. Currently I live in the sunny southern shores of Palm Bay,
              Florida.</p>
            <p>While studying with Thinkful's Engineering Immersion program,
              I designed mobile-first web based applications. For examples of my work,
              please check out my <Link to='/projects'>Projects page</Link>.
            </p>
          </div>
        </div>
        <div className="about_wrapper">
          <div className="profile_tech">
            <h2>Experience:</h2>
            <p>I have experience in the following tech stacks:</p>
              <ul>
                <li>PostgreSQL</li>
                <li>Express</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>Javascript</li>
                <li>C++</li>
                <li>C#</li>
              </ul>
            </div>
            <div className="profile_other">
              <h2>About myself:</h2>
              <p>What drew me to the web design field is the constantly evolving nature of technology.
                My first experience with web design and computer programing was in 2003, with basic C++, CSS and HTML.
                From that first programing course at Penn Manor, I was hooked.<br/>
                After highschool, I've had to overcome many hardships that have given me real world experience.
                Now I'm ready to move forward. I'm ready to apply my personal experience along
                with my passion for all things technology into a career I can be proud of. 
              </p>
              <p>Aside from web development, I'm a huge nerd who enjoys:</p>
              <ul>
                <li>Table top RPGs</li>
                <li>Trading card games</li>
                <li>Movies of all kinds</li>
              </ul>
              <p>So if you're looking for a team player with passion and drive, please feel free to <Link to='/contact'>contact me!</Link></p>
            </div>
          </div>
      </div>
    )
  }
}