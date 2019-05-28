import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Modal extends Component {
  render() {
    return createPortal(
      (
        <div className="ui dimmer modals visible active" onClick={this.props.onBackgroundClick}>
          <div className="ui standard modal visible active" onClick={e => e.stopPropagation()}>
            {
              !this.props.children ?
              (
              <>
                <div className="header">{this.props.header}</div>
                <div className="content">
                  {this.props.content}
                </div>
                <div className="actions">
                  {this.props.actions}
                </div>
              </>
              )
              : this.props.children
            }
          </div>
        </div>
      ),
      document.querySelector(this.props.domQuery || '#modal')
    )
  }
}
