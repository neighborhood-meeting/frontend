import React, { PropTypes } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'

import * as Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

// Styles
import styles from './Styles/SplashScreenStyle'

class SplashScreen extends React.Component {
  static propTypes = {
    toHome: PropTypes.func.isRequired,
    toSignup: PropTypes.func.isRequired,
    toSignin: PropTypes.func.isRequired,
    fetchUser: PropTypes.func
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
        <TouchableOpacity style={styles.guestButton} onPress={this.handlePressSignup}>
          <Text style={styles.guestButtonText}>
            회원가입
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.guestButton} onPress={this.handlePressSignin}>
          <Text style={styles.guestButtonText}>
            로그인
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.guestButton} onPress={this.handlePressLogin}>
          <Text style={styles.guestButtonText}>
            둘러보기
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  handlePressLogin = () => {
    const { toHome, fetchUser } = this.props
    fetchUser('ekdxhrl0096@daum.net', '1234')
      .then(() => toHome())
  }

  handlePressSignup = () => {
    const { toSignup } = this.props
    toSignup({ onRight: () => NavigationActions.regionSelect() })
  }

  handlePressSignin = () => {
    const { toSignin } = this.props
    toSignin()
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toHome: NavigationActions.home,
    toSignup: NavigationActions.signup,
    toSignin: NavigationActions.signin,
    fetchUser: (email, password) => dispatch(Actions.fetchUser(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
