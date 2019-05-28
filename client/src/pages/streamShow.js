import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Spinner } from '../components/Loading'
import { fetchStream } from '../redux/actions/streamActions'

class streamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  render() {
    const title = this.props.stream && this.props.stream.title
    const description = this.props.stream && this.props.stream.description
    return (
      <>
      {
        this.props.stream ?
        (
          <>
            <h1>{ title }</h1>
            <p>{ description }</p>
          </>
        )
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
  fetchStream
})(streamShow)