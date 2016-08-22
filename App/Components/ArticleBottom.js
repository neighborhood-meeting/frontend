import React, { PropTypes } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './Styles/ArticleBottomStyle'
import { Images } from '../Themes'

export default class ArticleBottom extends React.Component {

  static propTypes = {
    article: PropTypes.object.isRequired
  }

  render () {
    return (
      <View style={styles.bottomBlock}>
        <TouchableOpacity style={styles.bottomButtonBlock} onPress={this.handleJoinPress}>
          <Image source={Images.icon_join} style={styles.joinIcon} />
          <Text style={styles.bottomButtonText}>참여하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButtonBlock} onPress={this.handleCommentPress}>
          <Image source={Images.icon_rp} style={styles.commentIcon} />
          <Text style={styles.bottomButtonText}>댓글달기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButtonBlock} onPress={this.handleSharePress}>
          <Image source={Images.icon_share} style={styles.shareIcon} />
          <Text style={styles.bottomButtonText}>공유하기</Text>
        </TouchableOpacity>
      </View>
    )
  }

  handleJoinPress = () => {
    window.alert('join')
  }

  handleCommentPress = () => {
    window.alert('comment')
  }

  handleSharePress = () => {
    window.alert('share')
  }
}
