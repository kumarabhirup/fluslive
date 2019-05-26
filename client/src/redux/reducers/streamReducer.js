import { mapKeys } from 'lodash'
import { CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAM, FETCH_STREAMS } from '../actions/types'

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case FETCH_STREAMS:
      return { ...state, ...mapKeys(action.payload, 'id') }
    case DELETE_STREAM:
      const newState = { ...state }
      delete newState[action.payload.id]
      return newState
    default:
      return state
  }
}

export default streamReducer