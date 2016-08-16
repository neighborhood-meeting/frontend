import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/NoticeStyle'

export default class Notice extends React.Component {

  static propTypes = {
    notice: React.PropTypes.object,
    onPress: React.PropTypes.func
  }

  render () {
    const {notice} = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.boldLabel}>{notice.title}</Text>
        <Text style={styles.label}>{notice.text}</Text>
      </View>
    )
  }
}
