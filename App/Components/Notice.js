import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './Styles/NoticeStyle'
import { Images } from '../Themes'

export default class Notice extends React.Component {

  static propTypes = {
    notice: React.PropTypes.string.isRequired,
    onPress: React.PropTypes.func
  }

  static defaultProps = {
    notice: {}
  }

  render () {
    const { notice, onPress } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.iconBlock}>
          <Image source={Images.alarm_icon} style={styles.noticeIcon} />
          <Text style={styles.iconText}>공지</Text>
        </View>
        <View style={styles.noticeBlock}>
          <Text style={styles.noticeContents}>
            {notice}
          </Text>
        </View>
        <TouchableOpacity style={styles.expandButton} onPress={onPress}>
          <Image source={Images.icon_below} style={styles.noticeIcon} />
        </TouchableOpacity>
      </View>
    )
  }
}
