import React, { PropTypes } from 'react'
import { View } from 'react-native'
// import { Images } from '../Themes'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

class RegionSelectScreen extends React.Component {

  static propTypes = {
  }

  componentDidMount () {
  }

  render () {
    return (
      <View>

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
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(RegionSelectScreen)
