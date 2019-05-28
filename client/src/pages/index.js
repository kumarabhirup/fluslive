import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchStreams } from '../redux/actions/streamActions'
import Button from '../components/Button'

class indexPage extends Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id} style={{padding: '10px 0px'}}>

          { this.props.currentUserId === stream.userId && (
            <div className="right floated content">
              <Link to={`/streams/edit/${stream.id}`}><Button icon="pencil" color="primary">Edit</Button></Link>
              <Link to={`/streams/delete/${stream.id}`}><Button icon="trash" color="negative">Delete</Button></Link>
            </div>
          ) }

          <i className="large middle aligned icon camera"></i>

          <div className="content">
            <h3><Link to={`/streams/show/${stream.id}`}>{ stream.title }</Link></h3>
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
          <br />
          { this.props.isSignedIn && (
            <div style={{width: '100%', textAlign: 'right'}}>
              <Link to="/streams/new"><Button icon="play" color="green">Create a Stream</Button></Link>
            </div>
          ) }
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams), // Convert object `{1: {}, 2: {}}` into an array like `[{}, {}]` so...
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {
  fetchStreams
})(indexPage)