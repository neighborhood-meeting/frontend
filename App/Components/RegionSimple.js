import React, { PropTypes } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RegionSimpleStyle'

export default class RegionSimple extends React.Component {
  static propTypes = {
    region: PropTypes.object.isRequired,
    onPress: PropTypes.func
  }

  render () {
    const {region, onPress} = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.boldLabel}>
          {region.name}
        </Text>
        <Text style={styles.label}>
          호스트 ? {region.owner.name}
        </Text>
      </TouchableOpacity>
    )
  }
}
