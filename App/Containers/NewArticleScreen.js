import React, { PropTypes } from 'react'
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'

import dismissKeyboard from 'dismissKeyboard'

// Styles
import styles from './Styles/NewArticleScreenStyle'
import { Colors, Images } from '../Themes'

class NewArticleScreen extends React.Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    region: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired,
    postArticle: PropTypes.func.isRequired
  }

  static defaultProps = {
    user: {},
    region: {},
    category: {}
  }

  state = {
    articleTitle: '',
    articleContents: '',
    contentsHeight: 35
  }

  render () {
    const { category } = this.props
    const { articleTitle, articleContents, contentsHeight } = this.state

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.newArticleBlock}>
          <View style={styles.categoryBlock}>
            <Image source={category.image} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </View>
          <View style={styles.contentBlock}>
            <TextInput
              ref='articleTitle'
              style={styles.articleTitle}
              onChangeText={(text) => this.handleChangeText('articleTitle', text)}
              onSubmitEditing={() => this.handleFocusNext('articleContents')}
              value={articleTitle}
              keyboardType='default'
              returnKeyType='next'
              placeholder='제목을 입력해주세요'
              placeholderTextColor={Colors.placeholder}
              underlineColorAndroid='transparent'
            />
            <TextInput
              ref='articleContents'
              style={[styles.articleContents, {height: Math.max(35, contentsHeight)}]}
              onChangeText={(text) => this.handleChangeText('articleContents', text)}
              onContentSizeChange={this.handleContentSizeChange}
              multiline
              value={articleContents}
              keyboardType='default'
              returnKeyType='done'
              placeholder='내용을 입력해주세요'
              placeholderTextColor={Colors.placeholder}
              underlineColorAndroid='transparent' />
          </View>
          <View style={styles.imageBlock}>
            <View style={styles.imageAddButton} />
          </View>
          <View style={styles.bottomBlock}>
            <Image source={Images.icon_cam} style={styles.cameraIcon} />
            <TouchableOpacity
              style={styles.registerButtonBlock}
              onPress={this.handleRegisterPress}>
              <Text style={styles.registerButton}>글 게시</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }

  handleChangeText = (target, text) => {
    const nextState = {}
    nextState[target] = text
    this.setState(nextState)
  }

  handleFocusNext = (nextField) => {
    this.refs[nextField].focus()
  }

  handleContentSizeChange = (e) => {
    this.setState({
      contentsHeight: e.nativeEvent.contentSize.height
    })
  }

  handleRegisterPress = () => {
    const { user, region, postArticle } = this.props
    const { inputText } = this.state
    if (!inputText) {
      window.alert('댓글 내용을 입력해주세요.')
      return
    }
    postArticle(user.userId, region.regionId, inputText)
      .then(() => {
        this.setState({
          inputText: ''
        })
        dismissKeyboard()
      })
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postArticle: (article) => dispatch(Actions.postArticle(article))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewArticleScreen)
