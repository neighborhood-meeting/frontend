import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './Styles/NavItemsStyle';
import { Actions as NavigationActions, ActionConst } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Metrics } from '../Themes';

const toggleDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: value => !value
  });
};

export default {
  backButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Icon name='angle-left'
              size={Metrics.icons.medium}
              color={Colors.snow}
              style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    );
  },

  hamburgerButton () {
    return (
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon name='bars'
              size={Metrics.icons.medium}
              color={Colors.snow}
              style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    );
  },

  editButton () {
    return (
      <TouchableOpacity>
        <Icon name='edit'
              size={Metrics.icons.medium}
              color={Colors.snow}
              style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    );
  },

  homeButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.home} style={{position: 'absolute', right: 0}}>
        <Icon name='home'
              size={Metrics.icons.medium}
              color={Colors.snow}
              style={styles.navButtonRight}
        />
      </TouchableOpacity>
    );
  }
}
