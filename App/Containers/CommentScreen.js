import React, { PropTypes } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'

import Comment from '../Components/Comment'

// Styles
import styles from './Styles/CommentScreenStyle'

class CommentScreen extends React.Component {

  static propTypes = {
    article: PropTypes.object.isRequired,
    fetchComments: PropTypes.func.isRequired,
    postComment: PropTypes.func.isRequired,
    comments: PropTypes.array
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
    const {article} = this.props
    const { inputText } = this.state
    return (
      <View style={styles.mainContainer}>
        <View style={styles.commentInputBlock}>
          <TextInput
            style={styles.textInput}
            onChangeText={this.handleChangeText}
            value={inputText}
            keyboardType='default'
            returnKeyType='go'
            placeholder='댓글을 입력해주세요 :)'
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
        <Comment key={comment.commentId} comment={comment} />
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
    const { article, postComment } = this.props
    const { text } = this.state.inputText
    if (!text) {
      window.alert('댓글 내용을 입력해주세요.')
      return;
    }
    postComment(article.articleId, text)
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (articleId) => dispatch(Actions.fetchComments(articleId)),
    postComment: (articleId, comment) => dispatch(Actions.postComment(articleId, comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentScreen)
