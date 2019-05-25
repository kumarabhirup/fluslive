import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './Header'
import Router from './Router'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ui container">
          <Header />
          <Router />
        </div>
      </BrowserRouter>
    )  
  }
}
