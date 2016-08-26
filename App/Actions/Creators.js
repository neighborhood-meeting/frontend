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
      console.log('-------------user-------')
      console.log(responseJson)
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
      console.log('-------------region-------')
      console.log(responseJson)
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
const fetchArticles = (data) => {
  return (dispatch) => {
    let url
    if (data.regionId) {
      url = data.categoryType
        ? `http://52.78.120.152/api/v1/articles/search?regionId=${data.regionId}&type=${data.categoryType}`
        : `http://52.78.120.152/api/v1/articles/regions/${data.regionId}`
    } else {
      url = `http://52.78.120.152/api/v1/articles/users/${data.userId}`
    }
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('-------------articles-------')
      console.log(responseJson)
      dispatch(receiveArticles(responseJson))
      return responseJson
    })
    .catch((error) => {
      console.error(error)
      window.alert('글 정보를 불러 올 수 없습니다')
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

const postArticle = (data) => {
  return (dispatch) => {
    let formData = new FormData()
    formData.append('title', data.articleTitle)
    formData.append('contents', data.articleContents)
    formData.append('categoryType', data.categoryType)
    formData.append('writerId', data.userId)
    formData.append('regionId', data.regionId)
    formData.append('articleMainImage', {
      uri: data.mainImage.uri,
      name: data.mainImage.fileName,
      type: data.mainImage.type
    })
    return fetch('http://52.78.120.152/api/v1/articles', {
      method: 'POST',
      body: formData
    })
    .catch((error) => {
      console.error(error)
      window.alert('글 등록에 실패했습니다')
      return {}
    })
  }
}

const joinArticle = (data) => {
  return (dispatch) => {
    return fetch('http://127.0.0.1:8080/api/v1/regions/join', {
      method: 'POST',
      body: {
        userId: data.userId,
        articleId: data.articleId
      }
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

const postComment = (userId, articleId, contents) => {
  return (dispatch) => {
    return fetch('http://52.78.120.152/api/v1/comments', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userId,
        articleId: articleId,
        contents: contents
      })
    })
    // .then((response) => response.json())
    // .then((responseJson) => {
      // dispatch(addComment(responseJson))
      // return responseJson
    // })
    .catch((error) => {
      console.error(error)
      window.alert('댓글 등록에 실패했습니다')
      return {}
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
  postArticle,
  joinArticle,

  requestArticle,
  receiveArticle,
  receiveArticleFailure,
  fetchArticle,

  requestComments,
  receiveComments,
  receiveCommentsFailure,
  fetchComments,

  postComment
}
