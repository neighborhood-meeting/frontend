import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import RegionsReducer from './RegionsReducer'
import RegionReducer from './RegionReducer'
import ArticlesReducer from './ArticlesReducer'
import ArticleReducer from './ArticleReducer'
import CommentsReducer from './CommentsReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  login: LoginReducer,
  regions: RegionsReducer,
  region: RegionReducer,
  articles: ArticlesReducer,
  article: ArticleReducer,
  comments: CommentsReducer
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = ['login']
