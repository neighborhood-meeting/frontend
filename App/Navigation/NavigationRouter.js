import React, { Component } from 'react'
import { Scene, Router, ActionConst } from 'react-native-router-flux'
import { Alert, BackAndroid } from 'react-native'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

import LoginScreen from '../Containers/LoginScreen'
import SplashScreen from '../Containers/SplashScreen'
import HomeScreen from '../Containers/HomeScreen'
import RegionScreen from '../Containers/RegionScreen'
import ArticleScreen from '../Containers/ArticleScreen'

class NavigationRouter extends Component {
  onExitApp = () => {
    Alert.alert(
      '종료하기',
      '정말 종료 하실 건가요? ㅠ_ ㅠ',
      [
        { text: '취소', onPress: () => {} },
        { text: '확인', onPress: () => BackAndroid.exitApp() }
      ]
    )
    return true
  };

  render () {
    return (
      <Router
        onExitApp={this.onExitApp}>
        <Scene
          key='splash'
          initial
          hideNavBar
          component={SplashScreen} />
        <Scene
          key='home'
          type={ActionConst.RESET}
          hideNavBar
          component={HomeScreen} />
        <Scene key='regionMain' component={NavigationDrawer}>
          <Scene
            key='drawerChildrenWrapper'
            navigationBarStyle={Styles.navBar}
            titleStyle={Styles.title}
            leftButtonIconStyle={Styles.leftButton}
            rightButtonTextStyle={Styles.rightButton}>
            <Scene
              initial
              key='region'
              title='region'
              component={RegionScreen}
              renderLeftButton={NavItems.hamburgerButton}
              renderRightButton={NavItems.homeButton} />
            <Scene
              // initial
              key='article'
              title='article'
              component={ArticleScreen}
              renderRightButton={NavItems.homeButton} />
            <Scene
              key='login'
              component={LoginScreen}
              title='Login'
              hideNavBar />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
