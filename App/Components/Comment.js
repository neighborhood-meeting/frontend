import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/CommentStyle'

export default class Comment extends React.Component {

  static propTypes = {
    comment: React.PropTypes.object
  }

  render () {
    const { comment } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.boldLabel}>
          {comment.content}
        </Text>
        <Text style={styles.label}>
          {comment.writer && comment.writer.name}
        </Text>
      </View>
    )
  }
}
