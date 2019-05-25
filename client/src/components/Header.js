import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">FlusLive</Link>
      <div className="right menu">
        <Link to="/" className="item">All streams</Link>
      </div>
    </div>
  )
}

