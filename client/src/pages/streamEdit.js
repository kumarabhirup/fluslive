import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import Button from '../components/Button'
import { Spinner } from '../components/Loading'
import streamValidate from '../lib/streamValidate'
import { editStream, fetchStream } from '../redux/actions/streamActions'

class streamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  renderInput = ({ input, label, meta: { touched, error } }) => {
    return (
      <div className={`field ${touched && error && 'error'}`}>
        <label>{ label }</label>
        <input type="text" autoComplete="off" {...input} />
        {touched && error && <span style={{color: 'red'}}>{ error }</span>}
      </div>
    )
  }

  onSubmit = payload => {
    this.props.editStream(payload)
  }
 
  render() {
    const title = this.props.stream && this.props.stream.title
    const description = this.props.stream && this.props.stream.description
    return (
      <>
      <h1>Edit the Stream</h1>
      {
        this.props.stream ? (
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
            <Field name="title" component={this.renderInput} label="Enter Title" />
            <Field name="description" component={this.renderInput} label="Enter Description" />
            <Button icon="edit" color="yellow">Edit the stream</Button>
          </form>
        )
        : (
          <Spinner />
        )
      }
      </>
    )
  }
}

const componentWrappedInForm = reduxForm({
  form: 'streamEdit',
  validate: streamValidate
})(streamEdit)

const mapStateToProps = ({ streams }, ownProps) => {
  return {
    stream: streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {
  editStream,
  fetchStream
})(componentWrappedInForm)