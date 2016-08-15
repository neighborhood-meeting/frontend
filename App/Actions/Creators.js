import Types from './Types';

const attemptLogin = (username, password) =>
  ({ type: Types.LOGIN_ATTEMPT, username, password })

const loginSuccess = (username) =>
  ({ type: Types.LOGIN_SUCCESS, username })

const loginFailure = (errorCode) =>
  ({ type: Types.LOGIN_FAILURE, errorCode })

const logout = () => ({ type: Types.LOGOUT })

const startup = () => ({ type: Types.STARTUP })

const requestTemperature = (city) => ({ type: Types.TEMPERATURE_REQUEST, city })
const receiveTemperature = (temperature) => ({ type: Types.TEMPERATURE_RECEIVE, temperature })
const receiveTemperatureFailure = () => ({ type: Types.TEMPERATURE_FAILURE })

const requestRoomList = (userId) => ({ type: Types.ROOM_LIST_REQUEST, userId})
const receiveRoomList = (rooms) => ({ type: Types.ROOM_LIST_RECEIVE, rooms})
const fetchRoomList = (userId) => {
  return (dispatch) => {
    // return fetch('rooms.json')
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   dispatch(receiveRoomList(responseJson.rooms));
    //   return responseJson.rooms;
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
    dispatch(receiveRoomList(rooms.rooms));
  }
}

const requestRoomMain = () => ({ type: Types.ROOM_MAIN_REQUEST });
const receiveRoomMain = (room) => ({ type: Types.ROOM_MAIN_RECEIVE, room});
const receiveRoomMainFailure = () => ({ type: Types.ROOM_MAIN_FAILURE});
const fetchRoomMain = (roomId) => {
  return (dispatch) => {
    dispatch(receiveRoomMain(room));
  };
};

/**
 Makes available all the action creators we've created.
 */
export default {
  attemptLogin,
  loginSuccess,
  loginFailure,
  logout,
  startup,
  requestTemperature,
  receiveTemperature,
  receiveTemperatureFailure,

  requestRoomList,
  receiveRoomList,
  fetchRoomList,

  fetchRoomMain
};

const rooms = {
  rooms: [
    {
      roomId: 1,
      title: '철수 아파트 모여라',
      hostId: 1,
      hostName: '철수'
    },
    {
      roomId: 2,
      title: '영희네 동네 주민 모임',
      hostId: 2,
      hostName: '영희'
    },
    {
      roomId: 3,
      title: '민수 때릴 사람',
      hostId: 3,
      hostName: '민수'
    },
    {
      roomId: 4,
      title: '민성 아파트 모여라',
      hostId: 4,
      hostName: '민성'
    },
    {
      roomId: 5,
      title: '혜임네 동네 주민 모임',
      hostId: 5,
      hostName: '혜임'
    },
    {
      roomId: 6,
      title: '현정 때릴 사람',
      hostId: 6,
      hostName: '현정'
    },
    {
      roomId: 7,
      title: '행지 때릴 사람',
      hostId: 7,
      hostName: '행지'
    }
  ]
};

const room = {
  roomId: 1,
  title: '철수네 아파트',
  hostId: 1,
  hostName: '철수',
  notice: {
    userId: 2,
    userName: '영희',
    text: '웰컴 베베'
  },
};
