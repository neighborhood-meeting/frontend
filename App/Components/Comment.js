import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/CommentStyle'

export default class Comment extends React.Component {

  static propTypes = {
    comment: React.PropTypes.object
  }

  render () {
    const { comment } = this.props
    const { writer = {} } = comment

    return (
      <View style={styles.container}>
        <Image source={{uri: writer.profileUrl}} style={styles.writerImage} />
        <Text style={styles.commentText}>
          <Text style={styles.commentWriter}>
            {writer.name}
          </Text>
          <Text>
            {' : '}
          </Text>
          <Text style={styles.commentContents}>
            {comment.contents}
          </Text>
        </Text>
      </View>
    )
  }
}
