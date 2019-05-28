import React, { Component, createRef } from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'

import { Spinner } from '../components/Loading'
import { fetchStream } from '../redux/actions/streamActions'

class streamShow extends Component {
  constructor(props) {
    super(props)
    this.videoRef = createRef()
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  render() {
    const title = this.props.stream && this.props.stream.title
    const description = this.props.stream && this.props.stream.description
    return (
      <div style={{padding: '10px 0px'}}>
      {
        this.props.stream ?
        (
          <>
            <video ref={this.videoRef} style={{width: '80%', margin: '0px auto', display: 'block'}} controls />
            <div style={{width: '80%', margin: '30px auto', display: 'block'}}>
              <h1>{ title }</h1>
              <p>{ description }</p>
            </div>
          </>
        )
        : <Spinner />
      }
      </div>
    )
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return {
    stream: streams[ownProps.match.params.id]
  }
}
 
export default connect(mapStateToProps, {
  fetchStream
})(streamShow)