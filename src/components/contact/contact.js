import React, {Component} from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default class ContactPage extends Component {
  
  state = {
    result:null,
    error:null
  }

  sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_wkjjmio',
      'contact_form',
      e.target,
      'user_zn7fva21FjgAl53l1nvXu'
      )
    .then((result) => {
      console.log(result)
      this.setState({result:"sent! thank you"})
      document.getElementById('contact-form').reset()
    }, (error) => {
      console.log(error)
      this.setState({error:error.text});
    });
  }

  render(){
    const {result, error} = this.state;
    const Mailto = ({email,subject,body,children}) => {
      return (
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
      );
    };
    return (
      <div className="contact_page">
        <h2>Contact me!</h2>
        <div className="email_form">
          <form id='contact-form' className='contact-form' onSubmit={this.sendEmail}>
            <div role='alert' className='alert'>
              {error && <p className='red'>{error}</p>}
              {result && <p className='green'>{result}</p>}
            </div>
            <input type='hidden' name='contact_number' />
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
            <Mailto email="the.thran@gmail.com" subject="hello & welcome" body="">
              <FontAwesomeIcon icon={faEnvelope} size='5x' />  
            </Mailto> 
            <a href="https://github.com/MathewMurray" target="blank"><FontAwesomeIcon icon={faGithub} size="5x"/></a>
            <a href="https://www.linkedin.com/in/mathewmurray/" target="black"><FontAwesomeIcon icon={faLinkedin} size="5x" /></a>
        </div>
      </div>
    )
  }
}