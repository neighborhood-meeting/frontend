import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import WeatherReducer from './WeatherReducer'
import RoomListReducer from './RoomListReducer';
import RoomMainReducer from './RoomMainReducer';

// glue all the reducers together into 1 root reducer
export default combineReducers({
  roomList: RoomListReducer,
  login: LoginReducer,
  weather: WeatherReducer,
  room: RoomMainReducer
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = ['login']
