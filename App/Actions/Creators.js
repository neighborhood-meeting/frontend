import Types from './Types'

const attemptLogin = (username, password) => ({ type: Types.LOGIN_ATTEMPT, username, password })
const loginSuccess = (user) => ({ type: Types.LOGIN_SUCCESS, user })
const loginFailure = (errorCode) => ({ type: Types.LOGIN_FAILURE, errorCode })
const logout = () => ({ type: Types.LOGOUT })
const fetchUser = (dummyUser) => {
  return (dispatch) => {
    dispatch(loginSuccess(dummyUser))
  }
}

const requestRegions = (userId) => ({ type: Types.REGIONS_REQUEST, userId })
const receiveRegions = (regions) => ({ type: Types.REGIONS_RECEIVE, regions })
const receiveRegionsFailure = (regions) => ({ type: Types.REGIONS_FAILURE, regions })
const fetchRegions = (userId, dummyRegions) => {
  return (dispatch) => {
    return fetch(`http://facebook.github.io/react-native/movies.json`)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(receiveRegions(dummyRegions))
      // return responseJson.region
      return dummyRegions
    })
    .catch((error) => {
      console.error(error)
    })
  }
}

const requestRegion = () => ({ type: Types.REGION_REQUEST })
const receiveRegion = (region) => ({ type: Types.REGION_RECEIVE, region })
const receiveRegionFailure = () => ({ type: Types.REGION_FAILURE })
const fetchRegion = (regionId, dummyRegion) => {
  return (dispatch) => {
    return fetch(`http://facebook.github.io/react-native/movies.json`)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(receiveRegion(dummyRegion))
      // return responseJson.region
      return dummyRegion
    })
    .catch((error) => {
      console.error(error)
    })
  }
}

const requestArticles = () => ({ type: Types.ARTICLES_REQUEST })
const receiveArticles = (articles) => ({ type: Types.ARTICLES_RECEIVE, articles })
const receiveArticlesFailure = () => ({ type: Types.ARTICLES_FAILURE })
const fetchArticles = (regionId, dummyArticles) => {
  return (dispatch) => {
    return fetch(`http://facebook.github.io/react-native/movies.json`)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(receiveArticles(dummyArticles))
      // return responseJson.region
      return dummyArticles
    })
    .catch((error) => {
      console.error(error)
    })
  }
}

const requestArticle = () => ({ type: Types.ARTICLE_REQUEST })
const receiveArticle = (article) => ({ type: Types.ARTICLE_RECEIVE, article })
const receiveArticleFailure = () => ({ type: Types.ARTICLE_FAILURE })
const fetchArticle = (articleId, dummyArticle) => {
  return (dispatch) => {
    return fetch(`http://facebook.github.io/react-native/movies.json`)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(receiveArticle(dummyArticle))
      // return responseJson.region
      return dummyArticle
    })
    .catch((error) => {
      console.error(error)
    })
  }
}

const requestComments = () => ({ type: Types.COMMENTS_REQUEST })
const receiveComments = (comments) => ({ type: Types.COMMENTS_RECEIVE, comments })
const receiveCommentsFailure = () => ({ type: Types.COMMENTS_FAILURE })
const fetchComments = (articleId, dummyComments) => {
  return (dispatch) => {
    return fetch(`http://facebook.github.io/react-native/movies.json`)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(receiveComments(dummyComments))
      // return responseJson.region
      return dummyComments
    })
    .catch((error) => {
      console.error(error)
    })
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

  requestRegions,
  receiveRegions,
  receiveRegionsFailure,
  fetchRegions,

  requestRegion,
  receiveRegion,
  receiveRegionFailure,
  fetchRegion,

  requestArticles,
  receiveArticles,
  receiveArticlesFailure,
  fetchArticles,

  requestArticle,
  receiveArticle,
  receiveArticleFailure,
  fetchArticle,

  requestComments,
  receiveComments,
  receiveCommentsFailure,
  fetchComments
}
