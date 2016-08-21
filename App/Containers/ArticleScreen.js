import React, { PropTypes } from 'react'
import { View, ScrollView } from 'react-native'
// import { Images } from '../Themes'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'

import Article from '../Components/Article'
import Comment from '../Components/Comment'

// Styles
import styles from './Styles/ArticleScreenStyle'

const dummyArticle = {
  articleId: 1,
  name: '고구마 공구 하실 분',
  writer: {
    name: '철수'
  },
  viewCount: 100,
  content: '오늘 고구마를 살 것입니다',
  category: {
    name: '공구'
  },
  room: {
    name: '행복이 가득한 창전동'
  }
}

const dummyComments = [
  {
    commentId: 1,
    writer: {
      name: '철수'
    },
    content: '맛있을 것 같아여'
  },
  {
    commentId: 2,
    writer: {
      name: '영희'
    },
    content: '빨리 먹고 싶어여'
  },
  {
    commentId: 3,
    writer: {
      name: '철수'
    },
    content: '맛있을 것 같아여'
  },
  {
    commentId: 4,
    writer: {
      name: '영희'
    },
    content: '빨리 먹고 싶어여'
  }
]

class ArticleScreen extends React.Component {

  static propTypes = {
    articleId: PropTypes.number.isRequired,
    fetchArticle: PropTypes.func.isRequired,
    fetchComments: PropTypes.func.isRequired,
    article: PropTypes.object,
    comments: PropTypes.array
  }

  componentDidMount () {
    this.props.fetchArticle(this.props.articleId, dummyArticle)
    this.props.fetchComments(this.props.articleId, dummyComments)
  }

  render () {
    const {article} = this.props

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <Article article={article} />
          {this.createComments()}
        </ScrollView>
      </View>
    )
  }

  createComments = () => {
    return this.props.comments.map((comment) => {
      return (
        <Comment key={comment.commentId} comment={comment} />
      )
    })
  }

}

const mapStateToProps = (state) => {
  return {
    article: state.article.item,
    comments: state.comments.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (articleId, dummyArticle) => dispatch(Actions.fetchArticle(articleId, dummyArticle)),
    fetchComments: (articleId, dummyComments) => dispatch(Actions.fetchComments(articleId, dummyComments))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen)
