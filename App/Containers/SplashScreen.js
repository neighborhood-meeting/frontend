import React, { PropTypes } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import * as Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

// Styles
import styles from './Styles/SplashScreenStyle'
import { Images } from '../Themes'

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
        <Image source={Images.bg_image} style={styles.backgroundImage}>
          <Animatable.View animation='jello' iterationCount='infinite'>
            <Image source={Images.clearLogo} style={styles.logo} />
          </Animatable.View>
          <Image source={Images.logo} style={styles.logo} />
          <TouchableOpacity style={styles.guestButton} onPress={this.handlePressAgreement}>
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
        </Image>
      </View>
    )
  }

  handlePressLogin = () => {
    const { toHome, fetchUser } = this.props
    fetchUser('ekdxhrl0096@daum.net', '1234')
      .then(() => toHome())
  }

  handlePressAgreement = () => {
    const { toAgreement } = this.props
    toAgreement({ onRight: () => NavigationActions.regionSelect() })
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
    toAgreement: NavigationActions.agreement,
    toSignup: NavigationActions.signup,
    toSignin: NavigationActions.signin,
    fetchUser: (email, password) => dispatch(Actions.fetchUser(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
