import React, { PropTypes } from 'react'
import { View, ToastAndroid } from 'react-native'
// import { Images } from '../Themes'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'

import Article from '../Components/Article'

// Styles
import styles from './Styles/ArticleScreenStyle'

const dummyArticle = {
  articleId: 1,
  name: '고구마 공구 하실 분',
  writer: {
    name: '철수'
  },
  viewCount: 100,
  contents: '오늘 고구마를 살 것입니다',
  category: {
    name: '공구'
  },
  room: {
    name: '행복이 가득한 창전동'
  }
}

class ArticleScreen extends React.Component {

  static propTypes = {
    articleId: PropTypes.number.isRequired,
    article: PropTypes.object.isRequired,
    fetchArticle: PropTypes.func.isRequired
  }

  static defaultProps = {
    article: {}
  }

  componentDidMount () {
    this.props.fetchArticle(this.props.articleId, dummyArticle)
  }

  render () {
    const {article} = this.props

    return (
      <View style={styles.mainContainer}>
        <Article article={article} />
      </View>
    )
  }

  handleRoomPress = (room) => {
    return ToastAndroid.show(`room pressed ${room.title}`, ToastAndroid.SHORT)
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.article.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (articleId, dummyArticle) => dispatch(Actions.fetchArticle(articleId, dummyArticle))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen)
