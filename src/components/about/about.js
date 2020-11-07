import React, {Component} from 'react'
import profile from '../images/profile.jpg'
import './about.css'

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
            <p>I'm Mathew Murray, a web developer hailing from Lancaster
              Pa. Currently I live in the sunny southern shores of Palm Bay,
              Florida.</p>
            <p>While studying with Thinkful's engineering imersion program,
              i designed Mobile first web based applications. A partial look
              at these applications can be found in my projects.
            </p>
          </div>
        </div>
        <div className="about_wrapper">
          <div className="profile_tech">
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
              <p>I an a nerd at heart with a passion for table top games,
                video games and movies of all kinds.</p>
              <p>If you're looking for a fresh set of eyes for your project
                or another member for you're team, please feel free to contact me!
              </p>
            </div>
          </div>
      </div>
    )
  }
}