import React, { PropTypes } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
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
        <View style={styles.regionIcon} />
        <Text style={styles.memberNumber}>
          멤버 15
        </Text>
        <Text style={styles.regionTitle}>
          {region.name}
        </Text>
      </TouchableOpacity>
    )
  }
}
