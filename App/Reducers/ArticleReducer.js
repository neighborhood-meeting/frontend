import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  item: {
    articleId: null,
    name: null,
    viewCount: 0,
    content: null,
    writer: {},
    category: {},
    room: {}
  }
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
    ...action.article
  }
})

// temp failure
const failure = (state, action) => state.merge({
  fetching: false,
  error: true
})

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.ARTICLE_REQUEST]: request,
  [Types.ARTICLE_RECEIVE]: receive,
  [Types.ARTICLE_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
