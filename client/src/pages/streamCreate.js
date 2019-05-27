import React, { Component } from 'react'
import { connect } from 'react-redux'

import StreamForm from '../components/StreamForm'
import { createStream } from '../redux/actions/streamActions'

class streamCreate extends Component {
  onSubmit = payload => {
    this.props.createStream(payload)
  }
 
  render() {
    return (
      <>
        <StreamForm formHeading="Create a Stream" formButtonText="Stream!" onSubmit={this.onSubmit} />
      </>
    )
  }
}

export default connect(null, {
  createStream
})(streamCreate)