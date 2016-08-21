import React from 'react'
import { Text, View, Image } from 'react-native'

import moment from 'moment'

import styles from './Styles/ArticleStyle'

export default class Article extends React.Component {

  static propTypes = {
    article: React.PropTypes.object
  }

  render () {
    const { article } = this.props
    const { writer } = article

    return (
      <View style={styles.container}>
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
          <View style={styles.replyBlock}>
            <Text style={styles.replyText}>
              댓글 {article.commentCount}
            </Text>
          </View>
        </View>
        <View style={styles.contentBlock}>
          <Text style={styles.contentText}>{article.content}</Text>
          <Image source={{uri: article.articleMainImageUrl}} style={styles.articleMainImage} />
        </View>
      </View>
    )
  }
}
