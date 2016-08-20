import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  items: [],
  fetching: false,
  error: null
})

// login attempts
const request = (state, action) => state.merge({
  fetching: true
})

// receive temp
const receive = (state, action) => state.merge({
  fetching: false,
  error: null,
  items: [...action.comments]
})

// temp failure
const failure = (state, action) => state.merge({
  fetching: false,
  error: true,
  items: []
})

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.COMMENTS_REQUEST]: request,
  [Types.COMMENTS_RECEIVE]: receive,
  [Types.COMMENTS_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
