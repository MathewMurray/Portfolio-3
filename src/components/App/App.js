import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './../header/header'
import AboutRoute from './../routes/about-route'
import ContactRoute from './../routes/contact-route'
import ProjectRoute from './../routes/projects-route'
import NotFoundRoute from './../routes/NotFoundRoute'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App_header">
          <Header />
        </header>
        <main className="App_main">
          <Switch>
            <Route
            exact path={'/'}
            component={AboutRoute}
            />
            <Route
            path={'/projects'}
            component={ProjectRoute}
            />
            <Route
            path={'/contact'}
            component={ContactRoute}
            />
            <Route
            component={NotFoundRoute}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
export default App;