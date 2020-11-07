import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'

export default class Header extends Component {
  render() {
    return(
      <>
      <div className="header_container">
        <h1 className="header_name">
          Mathew Murray
        </h1>
        <div className="nav_container">
          <nav>
            <Link to='/'> About </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/contact'> Contact </Link>
          </nav>
        </div>
      </div>
      </>
    )
  }
}