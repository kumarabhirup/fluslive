const streamValidate = ({ title, description }) => {
  const errors = {}

  if (!title) errors.title = 'You must enter a title.'
  else if (title.length < 5) errors.title = 'Write a bigger title.'

  if (!description) errors.description = 'You must enter a description.'
  else if (description.length < 15) errors.description = 'Write a longer description.'

  return errors
}

export default streamValidate