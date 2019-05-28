import React, { Component } from 'react'
import Modal from '../components/Modal'
import { connect } from 'react-redux'

import Button from '../components/Button'
import history from '../lib/historyObject'
import { fetchStream, deleteStream } from '../redux/actions/streamActions'

class streamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  actions = (
    <>
      <Button icon="cancel" onClick={() => history.push('/')}>Cancel</Button>
      <Button icon="trash" color="negative" onClick={() => this.props.deleteStream(this.props.match.params.id)}>Delete</Button>
    </>
  )

  render() {
    return (
      <>
        {
          this.props.stream ?
            <>
              Delete the stream
              <Modal 
                header="Delete Stream" 
                content={`Are you sure you wanna delete "${this.props.stream.title}" stream?`} 
                actions={this.actions}
                onBackgroundClick={() => history.push('/')}
              />
            </>
          : (
            <>
              Delete the stream
              <Modal 
                header="Delete Stream" 
                content="Are you sure you wanna delete this stream?" 
                actions={this.actions}
                onBackgroundClick={() => history.push('/')}
              />
            </>
          )
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
  fetchStream,
  deleteStream
})(streamDelete)