import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import styles from './Styles/NavItemsStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics, Images } from '../Themes'

const toggleDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: value => !value
  })
}

export default {
  backButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Icon
          name='angle-left'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.navButtonLeft} />
      </TouchableOpacity>
    )
  },

  delButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Image source={Images.icon_del} style={styles.navDelButton} />
      </TouchableOpacity>
    )
  },

  hamburgerButton () {
    return (
      <TouchableOpacity onPress={toggleDrawer}>
        <Image source={Images.icon_menu} style={styles.navHamburgerButton} />
      </TouchableOpacity>
    )
  },

  homeButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.home}>
        <Image source={Images.icon_home} style={styles.navHomeButton} />
      </TouchableOpacity>
    )
  }
}
