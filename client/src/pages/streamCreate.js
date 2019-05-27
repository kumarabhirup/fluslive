import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import Button from '../components/Button'
import streamValidate from './../lib/streamValidate'
import { createStream } from '../redux/actions/streamActions'

class streamCreate extends Component {
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
    this.props.createStream(payload)
  }
 
  render() {
    return (
      <>
      <h1>Create a Stream</h1>
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <Button color="primary">Stream!</Button>
      </form>
      </>
    )
  }
}

const componentWrappedInForm = reduxForm({
  form: 'streamCreate',
  validate: streamValidate
})(streamCreate)

export default connect(null, {
  createStream
})(componentWrappedInForm)