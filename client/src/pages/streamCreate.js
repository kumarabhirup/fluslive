import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import Button from '../components/Button'

class streamCreate extends Component {
  renderInput = ({ input, label }) => {
    return (
      <div className="field">
        <label>{ label }</label>
        <input type="text" {...input} />
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

export default reduxForm({
  form: 'streamCreate'
})(streamCreate)