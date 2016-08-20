import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import WeatherReducer from './WeatherReducer'
import RoomsReducer from './RoomsReducer'
import RoomReducer from './RoomReducer'
import ArticleReducer from './ArticleReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  login: LoginReducer,
  weather: WeatherReducer,
  rooms: RoomsReducer,
  room: RoomReducer,
  article: ArticleReducer
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = ['login']
