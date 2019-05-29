import React from 'react'
import { Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth'

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item"><h4>FlusLive</h4>&nbsp;&nbsp;The quickest way to stream!</Link>
      <div className="right menu">
        <Link to="/" className="item">All streams</Link>
        <Link to="/instructions" className="item">How to use</Link>
        <GoogleAuth />
      </div>
    </div>
  )
}

