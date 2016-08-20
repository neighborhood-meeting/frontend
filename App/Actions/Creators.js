import Types from './Types'

const attemptLogin = (username, password) => ({ type: Types.LOGIN_ATTEMPT, username, password })
const loginSuccess = (user) => ({ type: Types.LOGIN_SUCCESS, user })
const loginFailure = (errorCode) => ({ type: Types.LOGIN_FAILURE, errorCode })
const fetchUser = (dummyUser) => {
  return (dispatch) => {
    dispatch(loginSuccess(dummyUser))
  }
}

const logout = () => ({ type: Types.LOGOUT })

const startup = () => ({ type: Types.STARTUP })

const requestTemperature = (city) => ({ type: Types.TEMPERATURE_REQUEST, city })
const receiveTemperature = (temperature) => ({ type: Types.TEMPERATURE_RECEIVE, temperature })
const receiveTemperatureFailure = () => ({ type: Types.TEMPERATURE_FAILURE })

const requestRooms = (userId) => ({ type: Types.ROOMS_REQUEST, userId })
const receiveRooms = (rooms) => ({ type: Types.ROOMS_RECEIVE, rooms })
const fetchRooms = (userId, dummyRooms) => {
  return (dispatch) => {
    // return fetch('rooms.json')
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   dispatch(receiveRooms(responseJson.rooms))
    //   return responseJson.rooms
    // })
    // .catch((error) => {
    //   console.error(error)
    // })
    dispatch(receiveRooms(dummyRooms))
  }
}

const requestRoom = () => ({ type: Types.ROOM_REQUEST })
const receiveRoom = (room) => ({ type: Types.ROOM_RECEIVE, room })
const receiveRoomFailure = () => ({ type: Types.ROOM_FAILURE })
const fetchRoom = (roomId, dummyRoom) => {
  return (dispatch) => {
    dispatch(receiveRoom(dummyRoom))
  }
}

/**
 Makes available all the action creators we've created.
 */
export default {
  attemptLogin,
  loginSuccess,
  loginFailure,
  logout,
  fetchUser,

  startup,
  requestTemperature,
  receiveTemperature,
  receiveTemperatureFailure,

  requestRooms,
  receiveRooms,
  fetchRooms,

  requestRoom,
  receiveRoom,
  receiveRoomFailure,
  fetchRoom
}

const room = {
  roomId: 1,
  title: '행복이 가득한 창전동',
  hostId: 1,
  hostName: '철수',
  notice: {
    userId: 2,
    userName: '영희',
    text: '웰컴 베베'
  }
}
