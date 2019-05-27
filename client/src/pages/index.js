import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchStreams } from '../redux/actions/streamActions'

class indexPage extends Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id} style={{padding: '10px 0px'}}>
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <h3>{ stream.title }</h3>
            <div className="description">
              { stream.description }
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <>
        <center><h1>Streams</h1></center>
        <div className="ui celled list" style={{width: '1000px', margin: '30px auto'}}>
          { this.renderList() }
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams) // Convert object `{1: {}, 2: {}}` into an array like `[{}, {}]` so...
  }
}

export default connect(mapStateToProps, {
  fetchStreams
})(indexPage)