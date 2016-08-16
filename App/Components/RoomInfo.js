import React, { PropTypes } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RoomInfoStyle'

export default class RoomInfo extends React.Component {
  static propTypes = {
    room: PropTypes.object.isRequired,
    onPress: PropTypes.func
  }

  render () {
    const {room, onPress} = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.boldLabel}>
          {room.title}
        </Text>
        <Text style={styles.label}>
          {room.hostName}
        </Text>
      </TouchableOpacity>
    )
  }
}
