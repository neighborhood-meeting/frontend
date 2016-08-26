import React, { PropTypes } from 'react'
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'
import styles from './Styles/SigninScreenStyle'
import { Images } from '../Themes'

class SigninScreen extends React.Component {
  static propTypes = {
    toHome: PropTypes.func.isRequired,
    fetchUser: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      id: '아이디',
      pwd: '비밀번호'
    }
  }

  render () {
    return (
      <View style={styles.Signin}>
        <Image source={Images.bg_image} style={styles.backgroundImage}>
          <View style={styles.logo_container}>
            <Image source={Images.logo} style={styles.logo} />
          </View>
          <View style={styles.signin_container}>
            <View style={{ width: 278, height: 56, borderColor: 'gray', borderWidth: 1, borderRadius: 28 }}>
              <TextInput
                style={{borderWidth: 10, borderColor: 'transparent'}}
                onChangeText={(id) => { this.setState({ id: id }) }}
                placeholder='ID' />
            </View>
            <View style={{ marginTop: 10, width: 278, height: 56, borderColor: 'gray', borderWidth: 1, borderRadius: 28 }}>
              <TextInput
                style={{borderWidth: 10, borderColor: 'transparent'}}
                onChangeText={(pwd) => { this.setState({ pwd: pwd }) }}
                placeholder='password' />
            </View>
            <TouchableOpacity style={{marginTop: 36}} onPress={this.handlePressHome}>
              <Text style={styles.guestButtonText}>
                LogIn
              </Text>
            </TouchableOpacity>
          </View>

        </Image>
      </View>
    )
  }

  handlePressHome = () => {
    const { toHome, fetchUser } = this.props
    fetchUser(this.state.id, this.state.pwd)
      .then(() => toHome())
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toHome: NavigationActions.home,
    fetchUser: (email, password) => dispatch(Actions.fetchUser(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen)
