import React, { Component } from 'react'
import { Scene, Router, ActionConst, Actions as NavigationActions } from 'react-native-router-flux'
import { Alert, BackAndroid } from 'react-native'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

import SplashScreen from '../Containers/SplashScreen'
import HomeScreen from '../Containers/HomeScreen'
import RegionScreen from '../Containers/RegionScreen'
import ArticleScreen from '../Containers/ArticleScreen'
import NewArticleScreen from '../Containers/NewArticleScreen'
import CommentScreen from '../Containers/CommentScreen'
import AgreementScreen from '../Containers/AgreementScreen'
import SignupScreen from '../Containers/SignupScreen'
import SigninScreen from '../Containers/SigninScreen'
import RegionSelectScreen from '../Containers/RegionSelectScreen'

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

  handlePressComplete= () => {
    NavigationActions.regionSelect()
  };

  render () {
    return (
      <Router onExitApp={this.onExitApp}>
        <Scene
          key='root'
          navigationBarStyle={Styles.navBar}
          titleStyle={Styles.title}
          leftButtonIconStyle={Styles.leftButton}
          backButtonTextStyle={Styles.backButton}
          rightButtonTextStyle={Styles.rightButton}>
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
          <Scene
            key='agreement'
            hideNavBar
            component={AgreementScreen} />
          <Scene
            key='signup'
            hideNavBar={false}
            backTitle='취소'
            title='회원 가입'
            rightTitle='다음'
            onRight={() => {}}
            hideBackImage
            component={SignupScreen} />
          <Scene
            key='signin'
            hideNavBar={false}
            backTitle='취소'
            title='로그인'
            hideBackImage
            component={SigninScreen} />
          <Scene
            key='regionSelect'
            hideNavBar={false}
            backTitle='취소'
            title='지역선택'
            rightTitle='다음'
            hideBackImage
            onRight={() => { NavigationActions.home() }}
            component={RegionSelectScreen} />
          <Scene key='drawer' component={NavigationDrawer} open={false}>
            <Scene key='wrapper'
              navigationBarStyle={Styles.navBar}
              titleStyle={Styles.title}
              leftButtonIconStyle={Styles.leftButton}
              backButtonTextStyle={Styles.backButton}
              rightButtonTextStyle={Styles.rightButton}>
              <Scene
                initial
                key='region'
                component={RegionScreen}
                renderLeftButton={NavItems.hamburgerButton}
                renderRightButton={NavItems.homeButton} />
              <Scene
                key='article'
                component={ArticleScreen}
                renderBackButton={NavItems.backButton} />
              <Scene
                key='newArticle'
                title='새 글 작성'
                component={NewArticleScreen}
                navigationBarStyle={Styles.whiteNavBar}
                titleStyle={Styles.orangeTitle}
                renderBackButton={NavItems.delButton} />
              <Scene
                key='comment'
                title='댓글'
                navigationBarStyle={Styles.whiteNavBar}
                titleStyle={Styles.orangeTitle}
                component={CommentScreen}
                renderBackButton={NavItems.delButton} />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
