import React, {Component} from 'react'
import ContactPage from "../contact/contact"

export default class ContactRoute extends Component {
  render(){
    return (
      <div className="contact">
        <ContactPage />
      </div>
    )
  }
}