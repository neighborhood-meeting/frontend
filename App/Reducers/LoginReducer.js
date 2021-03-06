import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  item: {
    userId: null,
    email: null,
    name: null,
    sex: null,
    birthDate: null,
    profileUrl: null
  },
  errorCode: null,
  attempting: false
})

// login attempts
const attempt = (state, action) => state.merge({ attempting: true })

// successful logins
const success = (state, action) => {
  return state.merge({
    attempting: false,
    errorCode: null,
    item: {...action.user}
  })
}

// login failure
const failure = (state, action) => state.merge({ attempting: false, errorCode: action.errorCode })

// logout
const logout = (state, action) => state.merge({ username: null })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LOGIN_ATTEMPT]: attempt,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
