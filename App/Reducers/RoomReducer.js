import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  roomId: 0,
  title: '',
  hostId: 0,
  hostName: '',
  notice: {
    userId: 0,
    userName: '',
    text: ''
  },
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
  ...action.room
})

// temp failure
const failure = (state, action) => state.merge({
  fetching: false,
  error: true
})

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.ROOM_REQUEST]: request,
  [Types.ROOM_RECEIVE]: receive,
  [Types.ROOM_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
