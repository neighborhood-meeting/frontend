import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/ArticleStyle'

export default class Article extends React.Component {

  static propTypes = {
    article: React.PropTypes.object
  }

  render () {
    const {article} = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.boldLabel}>
          {article.name}
        </Text>
        <Text style={styles.label}>
          {article.writer && article.writer.name}
        </Text>
      </View>
    )
  }
}
