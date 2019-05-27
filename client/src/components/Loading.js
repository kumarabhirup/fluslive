import React from 'react'

export const Spinner = ({ style }) => {
  return (
    <img src="https://loading.io/spinners/rolling/lg.curve-bars-loading-indicator.gif" alt="Loading..." style={{width: "15px", ...style}} />
  )
}
