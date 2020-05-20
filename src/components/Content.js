import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Works from './Works'
import About from './About'
import '../styles/content.css';


const Content = () => {
  return (
    <section>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/works" component={Works} />
      <Route path="/about" component={About} />
    </Switch>
    </section>
  )
}

export default Content
