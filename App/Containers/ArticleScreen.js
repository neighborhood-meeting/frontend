import React, { PropTypes } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

import Article from '../Components/Article'

// Styles
import styles from './Styles/ArticleScreenStyle'

class ArticleScreen extends React.Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    article: PropTypes.object.isRequired,
    toComment: PropTypes.func.isRequired,
    joinArticle: PropTypes.func.isRequired
  }

  static defaultProps = {
    user: {},
    article: {}
  }

  render () {
    const { article } = this.props
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <Article article={article} onCommentPress={this.handleCommentPress} onPressJoin={this.handlePressJoin}/>
          <TouchableOpacity style={styles.commentCheckButton} onPress={this.handleCommentPress}>
            <Text style={styles.commentCheckText}>
              댓글확인
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }

  handleCommentPress = () => {
    const { article, toComment } = this.props
    toComment({
      article: article,
      title: `댓글 ${article.commentCount}`,
      renderTitle: null
    })
  }

  handlePressJoin = () => {
    const { article, user, joinArticle } = this.props
    const data = {
      userId: user.userId,
      articleId: article.articleId
    }
    joinArticle(data)
      .then((result) => {
        console.log(result)
      })
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments.items,
    user: state.login.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toComment: NavigationActions.comment,
    fetchComments: (articleId) => dispatch(Actions.fetchComments(articleId)),
    joinArticle: (data) => dispatch(Actions.joinArticle(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen)
