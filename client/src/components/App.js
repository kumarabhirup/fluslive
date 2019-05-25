import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import indexPage from '../pages'
import failedPage from '../pages/failed'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={indexPage} />
          <Route component={failedPage} />
        </Switch>
      </BrowserRouter>
    )  
  }
}
