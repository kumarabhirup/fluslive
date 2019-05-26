import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import Button from '../components/Button'

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
    console.log(payload)
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

const validate = ({ title, description }) => {
  const errors = {}

  if (!title) errors.title = 'You must enter a title.'
  else if (title.length < 5) errors.title = 'Write a bigger title.'

  if (!description) errors.description = 'You must enter a description.'
  else if (description.length < 15) errors.description = 'Write a longer description.'

  return errors
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(streamCreate)