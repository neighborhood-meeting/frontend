import React, { PropTypes } from 'react'
import { View, ScrollView } from 'react-native'
// import { Images } from '../Themes'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'

import Article from '../Components/Article'
import Comment from '../Components/Comment'

// Styles
import styles from './Styles/ArticleScreenStyle'

// const dummyComments = [
//   {
//     commentId: 1,
//     content: '맛있을 것 같아여',
//     writer: {
//       userId: 1,
//       name: '쿠키즈',
//       profileUrl: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'
//     },
//     createdAt: 1471796853000
//   },
//   {
//     commentId: 2,
//     writer: {
//       name: '영희'
//     },
//     content: '빨리 먹고 싶어여'
//   },
//   {
//     commentId: 3,
//     writer: {
//       name: '철수'
//     },
//     content: '맛있을 것 같아여'
//   },
//   {
//     commentId: 4,
//     writer: {
//       name: '영희'
//     },
//     content: '빨리 먹고 싶어여'
//   }
// ]

class ArticleScreen extends React.Component {

  static propTypes = {
    article: PropTypes.object.isRequired,
    fetchComments: PropTypes.func.isRequired,
    comments: PropTypes.array
  }

  componentDidMount () {
    const { article, fetchComments } = this.props
    article && fetchComments(article.articleId)
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
    comments: state.comments.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (articleId) => dispatch(Actions.fetchComments(articleId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen)
