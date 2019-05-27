import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import Button from '../components/Button'
import streamValidate from './../lib/streamValidate'

class StreamForm extends Component {
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
    this.props.onSubmit(payload)
  }
 
  render() {
    return (
      <>
      <h1>{ this.props.formHeading }</h1>
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <Button color="primary">{ this.props.formButtonText }</Button>
      </form>
      </>
    )
  }
}

export default reduxForm({
  form: 'streamForm',
  validate: streamValidate
})(StreamForm)