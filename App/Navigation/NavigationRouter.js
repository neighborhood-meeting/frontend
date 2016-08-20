import React, { Component } from 'react'
import { Scene, Router, ActionConst } from 'react-native-router-flux'
import { Alert, BackAndroid } from 'react-native'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'
import SplashScreen from '../Containers/SplashScreen'
import HomeScreen from '../Containers/HomeScreen'
import RegionScreen from '../Containers/RegionScreen'
import ArticleScreen from '../Containers/ArticleScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

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
          initial
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
              key='article'
              title='article'
              component={ArticleScreen}
              renderRightButton={NavItems.homeButton} />
            <Scene
              key='presentationScreen'
              component={PresentationScreen}
              title='Ignite'
              renderRightButton={NavItems.homeButton} />
            <Scene key='componentExamples' component={AllComponentsScreen} title='Components' />
            <Scene
              key='login'
              component={LoginScreen}
              title='Login'
              hideNavBar />
            <Scene
              key='usageExamples'
              component={UsageExamplesScreen}
              title='Usage'
              rightTitle='Example'
              onRight={() => window.alert('Example Pressed')} />
            <Scene key='mapviewExample' component={MapviewExample} title='Mapview Example' />
            <Scene key='apiTesting' component={APITestingScreen} title='API Testing' />
            <Scene key='theme' component={ThemeScreen} title='Theme' />
            <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info' />
            <Scene key='listviewExample' component={ListviewExample} title='Listview Example' />
            <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
