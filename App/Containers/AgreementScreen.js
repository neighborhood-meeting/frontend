import React, { PropTypes } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/AgreementScreenStyle'
import { Images } from '../Themes'

class AgreementScreen extends React.Component {
  static propTypes = {
    toSignup: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      s1: false,
      s2: false,
      s3: false,
      s4: false,
      all_agree_color: 'black',
      s1src: Images.noagree,
      s2src: Images.noagree,
      s3src: Images.noagree,
      s4src: Images.noagree
    }
  }

  render () {
    const nextButtonState = this.getNextButtonState()
    return (
      <View style={styles.agreement}>
        <View style={styles.image_container} >
          <Image source={Images.bg2_image} />
        </View>
        <View style={styles.contents_container}>
          <View style={styles.all_agree_container}>
            <View style={{marginTop: 10}}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>이용약관, 개인정보 수집 및</Text>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>이용에 모두 동의</Text>
            </View>
            <Image source={Images.bt_big_o} style={{ width: 77, height: 62 }} />
          </View>
          <View style={styles.guide_container}>
            <Text style={{fontSize: 7, color: 'white'}}>전체 동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 개별적으로도</Text>
            <Text style={{fontSize: 7, color: 'white'}}>동의를 선택할 수 있습니다.</Text>
          </View>
          <View style={styles.selection_container}>
            <View style={styles.selection}>
              <Text style={{color: 'white', fontSize: 15}}>서비스 이용약관 동의(필수)</Text>
              <TouchableOpacity
                onPress={() => this.handlePressSelection('s1')}>
                <Image source={this.state.s1src} style={{width: 24, height: 24}} />
              </TouchableOpacity>
            </View>
            <View style={styles.selection}>
              <Text style={{color: 'white', fontSize: 15}}>개인정보 수집 및 이용 동의(필수)</Text>
              <TouchableOpacity
                onPress={() => this.handlePressSelection('s2')}>
                <Image source={this.state.s2src} style={{width: 24, height: 24}} />
              </TouchableOpacity>
            </View>
            <View style={styles.selection}>
              <Text style={{color: 'white', fontSize: 15}}>이벤트 및 광고성 정보 수신(선택)</Text>
              <TouchableOpacity
                onPress={() => this.handlePressSelection('s3')}>
                <Image source={this.state.s3src} style={{width: 24, height: 24}} />
              </TouchableOpacity>
            </View>
            <View style={styles.selection}>
              <Text style={{color: 'white', fontSize: 15}}>만 14세 이상 사용자 확인</Text>
              <TouchableOpacity
                onPress={() => this.handlePressSelection('s4')}>
                <Image source={this.state.s4src} style={{width: 24, height: 24}} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={[styles.button_container, {backgroundColor: nextButtonState ? 'white' : 'transparent'}]}
            onPress={() => this.handlePressSignup()}>
            <Text>동의하고 다음으로!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  handlePressSignup = () => {
    const { toSignup } = this.props
    toSignup()
  }

  handlePressSelection = (type) => {
    const prev = this.state[type]
    this.setState({
      [type]: !prev
    })
    if (!prev === true) {
      this.setState({
        [type + 'src']: Images.agree
      })
    } else {
      this.setState({
        [type + 'src']: Images.noagree
      })
    }
  }

  getNextButtonState = () => {
    const {s1, s2, s3, s4} = this.state
    return s1 && s2 && s3 && s4
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toSignup: NavigationActions.signup
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgreementScreen)
