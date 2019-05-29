import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Button from './Button'

export default class StreamRow extends Component {
  state = {}

  render() {
    const { stream, currentUserId } = this.props
    return (
      <div className="item" key={stream.id} style={{padding: '10px 0px'}}>

        { currentUserId === stream.userId && (
          <div className="right floated content">

            <CopyToClipboard text={stream.token} onCopy={() => this.setState({ copied: true })}>
              <Button icon={this.state.copied ? 'terminal' : 'info'} color={this.state.copied ? 'green' : 'primary'}>{this.state.copied ? 'Copied' : 'Copy Stream key'}</Button>
            </CopyToClipboard>

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
  }
}
