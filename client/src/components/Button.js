import React from 'react'

export default function Button(props) {
  return (
    <button className={`ui ${props.color} button`} {...props}>
      { props.icon && <i className={`${props.icon} icon`} /> }
      { props.children }
    </button>
  )
}
