import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

import Home from './Home'
import Banapple from './Banapple.js'
import ForwardHypermedia from './ForwardHypermedia'
import StickyMenu from './StickyMenu'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <nav>
          <NavLink to='/'>home</NavLink>
          <NavLink to='/sticky-menu'>Sticky Menu</NavLink>
          <NavLink to='/banapple'>banapple</NavLink>
          <NavLink to='/forward-hypermedia'>Forward Hypermedia</NavLink>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/banapple' component={Banapple} />
          <Route exact path='/forward-hypermedia' component={ForwardHypermedia} />
          <Route exact path='/sticky-menu' component={StickyMenu} />
        </Switch>
      </div>
    </Router>
  }
}

export default App
