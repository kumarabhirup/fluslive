import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signIn, signOut } from '../redux/actions/authActions'
import Button from './Button'

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      // Do this after loading 👇
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'profile email openid https://www.googleapis.com/auth/userinfo.profile'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange) // To update UI after actions from the console
      })
    })
  }

  onAuthChange = isSignedIn => {
    isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut()
  }

  onSignInClick = () => {
    this.auth.signIn()
  }
 
  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton = () => (
    this.props.isSignedIn === null ? <img src="https://loading.io/spinners/rolling/lg.curve-bars-loading-indicator.gif" alt="Loading" style={{width: "15px"}} />
    : this.props.isSignedIn ? (
      <Button 
        icon="google" 
        color="red" 
        style={{zoom:0.8}} 
        onClick={this.onSignOutClick}
      >
        Sign Out
      </Button>
    )
    : !this.props.isSignedIn ? (
      <Button 
        icon="google" 
        color="green" 
        style={{zoom:0.8}} 
        onClick={this.onSignInClick}
      >
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

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {
  signIn,
  signOut
})(GoogleAuth)