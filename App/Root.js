import React, { PropTypes } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import DebugSettings from './Config/DebugSettings'
import NavigationRouter from './Navigation/NavigationRouter'
// import './Config/PushConfig'

import { Colors } from './Themes'

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  componentWillMount () {
    // const {dispatch} = this.props.store
    // dispatch(Actions.startup())
  }

  renderApp = () => {
    console.disableYellowBox = !DebugSettings.yellowBox
    return (
      <Provider store={this.props.store}>
        <View style={styles.container}>
          <StatusBar backgroundColor={Colors.bloodOrange} barStyle='light-content' />
          <NavigationRouter />
        </View>
      </Provider>
    )
  }

  render () {
    return this.renderApp()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
