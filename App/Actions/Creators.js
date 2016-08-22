import Types from './Types'

const attemptLogin = (username, password) => ({ type: Types.LOGIN_ATTEMPT, username, password })
const loginSuccess = (user) => ({ type: Types.LOGIN_SUCCESS, user })
const loginFailure = (errorCode) => ({ type: Types.LOGIN_FAILURE, errorCode })
const logout = () => ({ type: Types.LOGOUT })
const fetchUser = (email, password) => {
  return (dispatch) => {
    return fetch('http://52.78.120.152/api/v1/users/signIn', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(loginSuccess(responseJson))
      return responseJson
    })
    .catch((error) => {
      console.error(error)
      window.alert('유저 정보를 불러 올 수 없습니다')
      return {}
    })
  }
}

const requestRegions = (userId) => ({ type: Types.REGIONS_REQUEST, userId })
const receiveRegions = (regions) => ({ type: Types.REGIONS_RECEIVE, regions })
const receiveRegionsFailure = (regions) => ({ type: Types.REGIONS_FAILURE, regions })
const fetchRegions = (userId) => {
  return (dispatch) => {
    return fetch(`http://52.78.120.152/api/v1/regions?userId=${userId}`)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(receiveRegions(responseJson))
      return responseJson
    })
    .catch((error) => {
      console.error(error)
      window.alert('지역 정보를 불러 올 수 없습니다')
      return []
    })
  }
}

const requestRegion = () => ({ type: Types.REGION_REQUEST })
const receiveRegion = (region) => ({ type: Types.REGION_RECEIVE, region })
const receiveRegionFailure = () => ({ type: Types.REGION_FAILURE })
const fetchRegion = (regionId, dummyRegion) => {
  return (dispatch) => {
    return fetch('http://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(receiveRegion(dummyRegion))
      return dummyRegion
    })
    .catch((error) => {
      console.error(error)
      return {}
    })
  }
}

const requestArticles = () => ({ type: Types.ARTICLES_REQUEST })
const receiveArticles = (articles) => ({ type: Types.ARTICLES_RECEIVE, articles })
const receiveArticlesFailure = () => ({ type: Types.ARTICLES_FAILURE })
const fetchArticles = (regionId) => {
  return (dispatch) => {
    return fetch(`http://52.78.120.152/api/articles?regionId=${regionId}`)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(receiveArticles(responseJson))
      return responseJson
    })
    .catch((error) => {
      console.error(error)
      return []
    })
  }
}

const requestArticle = () => ({ type: Types.ARTICLE_REQUEST })
const receiveArticle = (article) => ({ type: Types.ARTICLE_RECEIVE, article })
const receiveArticleFailure = () => ({ type: Types.ARTICLE_FAILURE })
const fetchArticle = (articleId, dummyArticle) => {
  return (dispatch) => {
    return fetch('http://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(receiveArticle(dummyArticle))
      return dummyArticle
    })
    .catch((error) => {
      console.error(error)
      return {}
    })
  }
}

const requestComments = () => ({ type: Types.COMMENTS_REQUEST })
const receiveComments = (comments) => ({ type: Types.COMMENTS_RECEIVE, comments })
const receiveCommentsFailure = () => ({ type: Types.COMMENTS_FAILURE })
const fetchComments = (articleId) => {
  return (dispatch) => {
    return fetch(`http://52.78.120.152/api/v1/comments?articleId=${articleId}`)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(receiveComments(responseJson))
      return responseJson
    })
    .catch((error) => {
      console.error(error)
      window.alert('댓글 정보를 불러 올 수 없습니다')
      return []
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
