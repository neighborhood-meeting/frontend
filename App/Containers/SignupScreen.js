import React, { PropTypes } from 'react'
import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'
import styles from './Styles/SignupScreenStyle'

import dismissKeyboard from 'dismissKeyboard'

class SignupScreen extends React.Component {

  static propTypes = {
    fetchUser: PropTypes.func,
    registerUser: PropTypes.func,
    toRegionSelect: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      name: '이름',
      id: '아이디',
      pwd: '비밀번호',
      sex: 'woman',
      w_color: '#e1e1e1',
      m_color: '#e1e1e1'
    }
  }

  componentDidMount () {
    NavigationActions.refresh({ onRight: () => this.handlePressComplete() })
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.signup_container}>
          <TextInput
            style={{width: 281, height: 57, borderColor: 'transparent', borderWidth: 1}}
            onChangeText={(name) => { this.setState({ name: name }) }}
            placeholder='이름' />
          <TextInput
            style={{width: 281, height: 57, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(id) => { this.setState({ id: id }) }}
            placeholder='이메일' />
          <TextInput
            style={{width: 281, height: 57, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(pwd) => { this.setState({ pwd: pwd }) }}
            secureTextEntry
            placeholder='비밀번호' />
        </View>
        <View style={{flexDirection: 'row', marginTop: 23}}>
          <Text style={{marginLeft: 50, marginTop: 7}}>성별</Text>
          <TouchableOpacity
            style={[styles.sexButton, {marginLeft: 56, backgroundColor: this.state.w_color}]}
            onPress={this.handlePressWoman} >
            <Text style={{ color: 'white' }}>여자</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sexButton, {marginLeft: 5, backgroundColor: this.state.m_color}]}
            onPress={this.handlePressMan} >
            <Text style={{ color: 'white' }}>남자</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

  handlePressWoman = () => {
    this.setState({
      m_color: '#e1e1e1',
      w_color: '#ff7300',
      sex: 'woman'
    })
  }

  handlePressMan = () => {
    this.setState({
      w_color: '#e1e1e1',
      m_color: '#ff7300',
      sex: 'man'
    })
  }

  handlePressComplete = () => {
    const { toRegionSelect, registerUser } = this.props
    const { id, name, pwd, sex } = this.state
    const user = {
      id,
      name,
      pwd,
      sex
    }
    dismissKeyboard()
    registerUser(user)
      .then((user) => toRegionSelect())
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toRegionSelect: NavigationActions.regionSelect,
    registerUser: (email, name, password, sex) => dispatch(Actions.registerUser(email, name, password, sex))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
