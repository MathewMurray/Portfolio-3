import React, {Componenet} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './../header/header'
import AboutRoute from './../routes/about-route'
import ContextRoute from './../routes/contact-route'
import ProjectsRoute from './../routes/projects-route'

export default class App extends Componenet {
  render(){
    return (
      <div>
        <Header />
      </div>
    )
  }
}
