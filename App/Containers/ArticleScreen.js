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
    article: PropTypes.object.isRequired,
    toComment: PropTypes.func.isRequired
  }

  static defaultProps = {
    article: {}
  }

  render () {
    const { article } = this.props
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <Article article={article} onCommentPress={this.handleCommentPress} />
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
    toComment({ article: article, title: `댓글 ${article.commentCount}` })
  }

}

const mapStateToProps = (state) => {
  return {
    comments: state.comments.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toComment: NavigationActions.comment,
    fetchComments: (articleId) => dispatch(Actions.fetchComments(articleId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen)
