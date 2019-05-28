import React, { Component, createRef } from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'

import { Spinner } from '../components/Loading'
import { fetchStream } from '../redux/actions/streamActions'

class streamShow extends Component {
  constructor(props) {
    super(props)
    this.videoRef = createRef()
    this.STREAM_NAME = this.props.match.params.id
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
    this.buildPlayer()
  }

  componentDidUpdate() {
    this.buildPlayer() // Build the player after the stream is fetched.
  }

  buildPlayer = () => {
    if (this.player || !this.props.stream) {
      return
    }

    /**
     * Origin: https://github.com/illuspas/Node-Media-Server
     */
    this.player = flv.createPlayer({
      type: 'flv',
      url: `${process.env.REACT_RTMP_SERVER_ENDPOINT}/live/${this.STREAM_NAME}.flv`
    })

    this.player.attachMediaElement(this.videoRef.current)

    this.player.load()
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