import React from 'react'
import ReactDOM from 'react-dom'

import ProvideRedux from './components/ProvideRedux'
import * as serviceWorker from './serviceWorker'
import App from './components/App'

import './styles/index.css'

ReactDOM.render((
  <ProvideRedux>
    <App />
  </ProvideRedux>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
