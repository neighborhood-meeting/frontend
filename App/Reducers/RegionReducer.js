import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  item: {
    roomId: null,
    name: '',
    owner: {
      userId: null,
      name: ''
    },
    notice: ''
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
  item: {
    ...action.room
  }
})

// temp failure
const failure = (state, action) => state.merge({
  fetching: false,
  error: true
})

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.REGION_REQUEST]: request,
  [Types.REGION_RECEIVE]: receive,
  [Types.REGION_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
