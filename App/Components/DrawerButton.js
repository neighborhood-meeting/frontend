import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './Styles/DrawerButtonStyles'
import { Metrics, Colors } from '../Themes'

class DrawerButton extends Component {
  render () {
    const { icon, text } = this.props
    const iconBlock = icon && (
      <View style={styles.iconWrapper}>
        <Icon
          style={styles.icon}
          name={icon}
          size={Metrics.icons.small}
          color={Colors.snow} />
      </View>
    )
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        {iconBlock}
        <Text style={styles.text}>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}

DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onPress: PropTypes.func

}

export default DrawerButton
