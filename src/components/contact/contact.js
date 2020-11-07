import React, {Component} from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class ContactPage extends Component {
  sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_wkjjmio',
      'contact_form',
      e.target,
      'user_zn7fva21FjgAl53l1nvXu'
      )
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }

  render(){
    return (
      <div className="contact_page">
        <h2>Contact me!</h2>
        <div className="email_form">
          <form className='contact-form' onSubmit={this.sendEmail}>
            <imput type='hidden' name='contact_number' />
            <label>Name</label>
            <input type='text' name='user_name'/>
            <label>Email</label>
            <input type='email' name='user_email'/>
            <label>Message</label>
            <textarea name='message'/>
            <input type='submit' value='Send'/>
          </form>
        </div>
          <div className='card'>
            <a href="https://github.com/MathewMurray" target="blank"><FontAwesomeIcon icon={faGithub} size="5x"/></a>
            <a href="https://www.linkedin.com/in/mathewmurray/" target="black"><FontAwesomeIcon icon={faLinkedin} size="5x" /></a>
        </div>
      </div>
    )
  }
}