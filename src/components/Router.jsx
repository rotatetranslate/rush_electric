import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import { About, Contact, Home } from './index'
import RushLogo from '../assets/images/rush_cropped.png'

console.log(RushLogo)

const SiteRouter = () => {
  return (
    <Router>
      <div>
          <img src={RushLogo} alt="" style={{height: '50px'}}/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )
}

export default SiteRouter
