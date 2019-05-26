import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import authReducer from './authReducer'
import streamReducer from './streamReducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer, // redux-form needs the `form` reducer,
  streams: streamReducer
})