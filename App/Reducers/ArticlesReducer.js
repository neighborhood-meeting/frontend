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
  items: [...action.articles]
})

// temp failure
const failure = (state, action) => state.merge({
  fetching: false,
  error: true,
  items: []
})

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.ARTICLES_REQUEST]: request,
  [Types.ARTICLES_RECEIVE]: receive,
  [Types.ARTICLES_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
