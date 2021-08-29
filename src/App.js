import React from 'react'
import { Route, Switch } from 'react-router'
import Main from './components/Main'
import Profile from './components/Profile'

export default class App extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/" component={ Main } />
      </Switch>
    )
  }
}
