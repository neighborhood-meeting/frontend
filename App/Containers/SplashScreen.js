import React, { PropTypes } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'

import * as Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/SplashScreenStyle'

class SplashScreen extends React.Component {
  static propTypes = {
    toHome: PropTypes.func.isRequired
  }

  render () {
    return (
      <View style={styles.splash}>
        <View style={styles.backgroundImage} />
        <Animatable.View animation='jello' iterationCount='infinite'>
          <Image source={Images.clearLogo} style={styles.logo} />
        </Animatable.View>
        <Text style={styles.text}>
          Famm!!!!
        </Text>
        <TouchableOpacity style={styles.guestButton} onPress={this.props.toHome}>
          <Text style={styles.guestButtonText}>
            둘러보기
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toHome: NavigationActions.home
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
