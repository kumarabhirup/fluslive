import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Spinner } from '../components/Loading'
import StreamForm from '../components/StreamForm'
import { editStream, fetchStream } from '../redux/actions/streamActions'

class streamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = payload => {
    this.props.editStream(this.props.match.params.id, payload)
  }
 
  render() {
    const title = this.props.stream && this.props.stream.title
    const description = this.props.stream && this.props.stream.description
    return (
      <>
        {
          this.props.stream 
          ? <StreamForm formHeading="Edit a Stream" formButtonText="Edit the Stream" onSubmit={this.onSubmit} initialValues={{ title, description }} />
          : <Spinner />
        }
      </>
    )
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return {
    stream: streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {
  editStream,
  fetchStream
})(streamEdit)