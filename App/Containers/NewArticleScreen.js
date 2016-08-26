import React, { PropTypes } from 'react'
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'
import ImagePicker from 'react-native-image-picker'

import dismissKeyboard from 'dismissKeyboard'

// Styles
import styles from './Styles/NewArticleScreenStyle'
import { Colors, Images } from '../Themes'

class NewArticleScreen extends React.Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    region: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired,
    postArticle: PropTypes.func.isRequired,
    fetchArticles: PropTypes.func.isRequired
  }

  static defaultProps = {
    user: {},
    region: {},
    category: {}
  }

  state = {
    articleTitle: '',
    articleContents: '',
    contentsHeight: 35,
    mainImage: {}
  }

  render () {
    const { category } = this.props
    const { articleTitle, articleContents, contentsHeight, mainImage } = this.state

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
            <Image source={{ uri: mainImage.uri, isStatic: true }} style={styles.imageAddButton} />
          </View>
          <View style={styles.bottomBlock}>
            <TouchableOpacity onPress={this.handleImagePickPress}>
              <Image source={Images.icon_cam} style={styles.cameraIcon} />
            </TouchableOpacity>
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

  handleImagePickPress = () => {
    var options = {
      title: '사진 선택',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        this.setState({
          mainImage: {
            uri: Platform.OS === 'ios' ? response.uri.replace('file://', '') : response.uri,
            fileName: response.fileName,
            type: response.type
          }
        })
      }
    })
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
    const { user, region, category, postArticle, fetchArticles } = this.props
    const { articleTitle, articleContents, mainImage } = this.state
    if (!articleTitle) {
      window.alert('제목을 입력해주세요.')
      return
    }
    if (!articleContents) {
      window.alert('내용을 입력해주세요.')
      return
    }
    const data = {
      userId: user.userId,
      regionId: region.regionId,
      categoryType: category.type,
      articleTitle,
      articleContents,
      mainImage
    }
    postArticle(data)
      .then((result) => {
        console.log('---------------------------')
        console.log(region.regionId)
        console.log(result)
        dismissKeyboard()
        NavigationActions.pop()
        fetchArticles(region.regionId)
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
    postArticle: (article) => dispatch(Actions.postArticle(article)),
    fetchArticles: (regionId) => dispatch(Actions.fetchArticles(regionId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewArticleScreen)
