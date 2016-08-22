import React, { PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import moment from 'moment'

import styles from './Styles/ArticleTitleStyle'

export default class ArticleTitle extends React.Component {

  static propTypes = {
    article: PropTypes.object.isRequired
  }

  render () {
    const { article } = this.props
    const { writer = {} } = article

    return (
      <View style={styles.titleBlock}>
        <View style={styles.writerBlock}>
          <Image source={{uri: writer.profileUrl}} style={styles.writerImage} />
          <Text style={styles.writerName}>
            {writer.name}
          </Text>
          <Text style={styles.timeText}>
            {moment(article.createdAt).format('MM-DD')}
          </Text>
        </View>
        <TouchableOpacity style={styles.commentBlock} onPress={this.handleCommentPress}>
          <Text style={styles.commentText}>
            댓글 {article.commentCount}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  handleCommentPress = () => {
    window.alert('comment')
  }
}
