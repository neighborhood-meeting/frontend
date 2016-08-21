
import React, { PropTypes } from 'react'
import { View, TextInput, TouchableOpacity, Text} from 'react-native'
// import { Images } from '../Themes'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'
import styles from './Styles/SigninScreenStyle'

class SigninScreen extends React.Component {

	static propTypes = {
    toHome: PropTypes.func.isRequired,
    fetchUser: PropTypes.func
  }

 	constructor(props) {
    super(props);
    this.state = { 
    	id: '아이디',
    	pwd: '비밀번호'
    };
  }

  render () {
    return (
      <View style={styles.mainContainer}>
      	<View style={styles.loginImage}>
      	</View>
      	<View style={styles.input}>
					<TextInput
	        	style={{height: 50, borderColor: 'gray', borderWidth: 1}}
	        	onChangeText={(id) =>{ this.setState({id: id}) } }
						placeholder="아이디"/>
					<TextInput
	        	style={{height: 50, borderColor: 'gray', borderWidth: 1}}
	        	onChangeText={(pwd) =>{ this.setState({pwd: pwd}) }	}
	        	placeholder="비밀번호"/>
	       </View>
        <View style={styles.login}>
	        <TouchableOpacity style={styles.guestButton} onPress={this.handlePressHome}>
	          <Text style={styles.guestButtonText}>
	            로그인
	          </Text>
	        </TouchableOpacity>
        </View>
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
