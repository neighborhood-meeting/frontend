import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import styles from './Styles/NavItemsStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Images } from '../Themes'

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
        <Image source={Images.icon_prev} style={styles.navPrevButton} />
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
        <Image source={Images.icon_menu} style={styles.navMenuButton} />
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
