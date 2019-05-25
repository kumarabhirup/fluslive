import React, { Component } from 'react'

import Button from './Button'

class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      // Do this after loading 👇
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'profile email openid https://www.googleapis.com/auth/userinfo.profile'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange()
        this.auth.isSignedIn.listen(this.onAuthChange) // To update UI after actions from the console
      })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  renderAuthButton = () => (
    this.state.isSignedIn === null ? <img src="https://loading.io/spinners/rolling/lg.curve-bars-loading-indicator.gif" alt="Loading" style={{width: "15px"}} />
    : this.state.isSignedIn ? (
      <Button icon="google" color="red" style={{zoom:0.8}} onClick={() => this.auth.signOut()}>
        Sign Out
      </Button>
    )
    : !this.state.isSignedIn ? (
      <Button icon="google" color="green" style={{zoom:0.8}} onClick={() => this.auth.signIn()}>
        Sign In
      </Button>
    )
    : null
  )

  render() {
    return (
      <div className="item">
        { this.renderAuthButton() }
      </div>
    )
  }
}


export default GoogleAuth