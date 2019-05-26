import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from '../redux/reducers'

export default class ProvideRedux extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        { this.props.children }
      </Provider>
    )
  }
}
