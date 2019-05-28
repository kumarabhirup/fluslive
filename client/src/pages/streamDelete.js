import React, { Component } from 'react'
import Modal from '../components/Modal'

import Button from '../components/Button'
import history from '../lib/historyObject'

export default class streamDelete extends Component {
  actions = (
    <>
      <Button icon="cancel">Cancel</Button>
      <Button icon="trash" color="negative">Delete</Button>
    </>
  )

  render() {
    return (
      <div>
        Stream Delete
        <Modal 
          header="Delete Stream" 
          content="Are you sure you wanna delete this stream?" 
          actions={this.actions}
          onBackgroundClick={() => history.push('/')}
        />
      </div>
    )
  }
}
