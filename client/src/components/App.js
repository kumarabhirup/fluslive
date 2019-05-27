import React, { Component } from 'react'
import { Router as BrowserRouter } from 'react-router-dom'

import history from '../lib/historyObject'
import Header from './Header'
import Router from './Router'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div className="ui container">
          <Header />
          <Router />
        </div>
      </BrowserRouter>
    )  
  }
}
