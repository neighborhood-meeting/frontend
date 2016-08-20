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

const requestRegions = (userId) => ({ type: Types.REGIONS_REQUEST, userId })
const receiveRegions = (regions) => ({ type: Types.REGIONS_RECEIVE, regions })
const fetchRegions = (userId, dummyRegions) => {
  return (dispatch) => {
    // return fetch(`http://regions.json?${userId}`)
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   dispatch(receiveRegions(responseJson.regions))
    //   return responseJson.regions
    // })
    // .catch((error) => {
    //   console.error(error)
    // })
    dispatch(receiveRegions(dummyRegions))
  }
}

const requestRegion = () => ({ type: Types.REGION_REQUEST })
const receiveRegion = (region) => ({ type: Types.REGION_RECEIVE, region })
const receiveRegionFailure = () => ({ type: Types.REGION_FAILURE })
const fetchRegion = (regionId, dummyRegion) => {
  return (dispatch) => {
    dispatch(receiveRegion(dummyRegion))
  }
}

const requestArticle = () => ({ type: Types.ARTICLE_REQUEST })
const receiveArticle = (article) => ({ type: Types.ARTICLE_RECEIVE, article })
const receiveArticleFailure = () => ({ type: Types.ARTICLE_FAILURE })
const fetchArticle = (articleId, dummyArticle) => {
  return (dispatch) => {
    dispatch(receiveArticle(dummyArticle))
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

  requestRegions,
  receiveRegions,
  fetchRegions,

  requestRegion,
  receiveRegion,
  receiveRegionFailure,
  fetchRegion,

  requestArticle,
  receiveArticle,
  receiveArticleFailure,
  fetchArticle
}
