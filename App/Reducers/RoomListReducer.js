import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  rooms: [],
  fetching: false,
  error: null
})

// login attempts
const request = (state, action) =>
  state.merge({
    fetching: true
  })

// receive temp
const receive = (state, action) =>
  state.merge({
    fetching: false,
    error: null,
    rooms: action.rooms
  })

// temp failure
const failure = (state, action) =>
  state.merge({
    fetching: false,
    error: true,
    rooms: []
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.ROOM_LIST_REQUEST]: request,
  [Types.ROOM_LIST_RECEIVE]: receive,
  [Types.ROOM_LIST_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
