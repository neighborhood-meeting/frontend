import React, { PropTypes } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'

import dismissKeyboard from 'dismissKeyboard'
import Comment from '../Components/Comment'

// Styles
import styles from './Styles/CommentScreenStyle'
import { Colors } from '../Themes'

class CommentScreen extends React.Component {

  static propTypes = {
    article: PropTypes.object.isRequired,
    fetchComments: PropTypes.func.isRequired,
    postComment: PropTypes.func.isRequired,
    comments: PropTypes.array,
    user: PropTypes.object.isRequired
  }

  static defaultProps = {
    article: {},
    comments: []
  }

  state = {
    inputText: ''
  }

  componentDidMount () {
    const { article, fetchComments } = this.props
    article && fetchComments(article.articleId)
  }

  render () {
    const { inputText } = this.state
    return (
      <View style={styles.mainContainer}>
        <View style={styles.commentInputBlock}>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleChangeText}
            onSubmitEditing={this.handleRegisterPress}
            value={inputText}
            keyboardType='default'
            returnKeyType='go'
            placeholder='댓글을 입력해주세요 :)'
            placeholderTextColor={Colors.placeholder}
            underlineColorAndroid='transparent' />
          <TouchableOpacity style={styles.registerButton} onPress={this.handleRegisterPress}>
            <Text style={styles.registerButtonText}>
              등록
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.commentListBlock}>
          <View style={styles.commentListMargin} />
          {this.createComments()}
        </ScrollView>
      </View>
    )
  }

  createComments = () => {
    return this.props.comments.map((comment) => {
      return (
        <Comment key={comment.commentId} comment={comment} onPress={this.handleCommentPress} />
      )
    })
  }

  handleCommentPress = () => {
    window.alert('comment')
  }

  handleChangeText = (text) => {
    this.setState({
      inputText: text
    })
  }

  handleRegisterPress = () => {
    const { user, article, postComment, fetchComments } = this.props
    const { inputText } = this.state
    if (!inputText) {
      window.alert('댓글 내용을 입력해주세요.')
      return
    }
    postComment(user.userId, article.articleId, inputText)
      .then(() => {
        this.setState({
          inputText: ''
        })
        fetchComments(article.articleId)
        dismissKeyboard()
      })
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments.items,
    user: state.login.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (articleId) => dispatch(Actions.fetchComments(articleId)),
    postComment: (userId, articleId, contents) => dispatch(Actions.postComment(userId, articleId, contents))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentScreen)
