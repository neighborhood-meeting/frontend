import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './Styles/NoticeStyle'
import { Metrics, Colors } from '../Themes'

export default class Notice extends React.Component {

  static propTypes = {
    notice: React.PropTypes.string.isRequired,
    onPress: React.PropTypes.func
  }

  render () {
    const {notice} = this.props

    return (
      <View style={styles.container}>
        <View style={styles.iconBlock}>
          <Icon
            name='bell-o'
            size={Metrics.icons.small}
            color={Colors.orange} />
          <Text style={styles.iconText}>공지</Text>
        </View>
        <View style={styles.noticeBlock}>
          <Text style={styles.noticeText}>
            {notice}
          </Text>
        </View>
        <TouchableOpacity style={styles.expandButton}>
          <Icon
            name='angle-down'
            size={Metrics.icons.medium}
            color={Colors.steel} />
        </TouchableOpacity>
      </View>
    )
  }
}
