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
    console.log('start')
    console.log(region)
    console.log('end')
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.boldLabel}>
          {region.name}
        </Text>
        <Text style={styles.label}>
          {region.description}
        </Text>
        <Text style={styles.label}>
          {region.owner.name}
        </Text>
      </TouchableOpacity>
    )
  }
}