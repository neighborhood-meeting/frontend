import React, { PropTypes } from 'react'
import { View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/AgreementScreenStyle'
import { Images } from '../Themes'

class AgreementScreen extends React.Component {
  static propTypes = {
    toSignup: PropTypes.func.isRequired
  }

  render () {
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
        </View>
      </View>
    )
  }

  handlePressSignup = () => {
    const { toSignup } = this.props
    toSignup({ onRight: () => NavigationActions.regionSelect() })
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
