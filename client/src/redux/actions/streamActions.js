import { CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAMS, FETCH_STREAM } from './types'
import streamApi from './apis/stream'
import history from '../../lib/historyObject'

export const fetchStreams = () => async dispatch => {
  const response = await streamApi.get(`/streams`)
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  })
}

export const fetchStream = streamId => async dispatch => {
  const response = await streamApi.get(`/streams/${streamId}`)
  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  })
}

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth
  const response = await streamApi.post('/streams', { ...formValues, userId })
  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  })
  history.push('/')
}

export const editStream = (streamId, formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth
  const response = await streamApi.put(`/streams/${streamId}`, { ...formValues, userId })
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  })
  history.push('/')
}

export const deleteStream = streamId => async dispatch => {
  await streamApi.delete(`/streams/${streamId}`)
  dispatch({
    type: DELETE_STREAM,
    payload: {
      id: streamId
    }
  })
}