import React, { Component } from 'react'
import { ScrollView, Image, View } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents = () => {
    this.toggleDrawer()
    NavigationActions.componentExamples()
  }

  handlePressUsage = () => {
    this.toggleDrawer()
    NavigationActions.usageExamples()
  }

  handlePressAPI = () => {
    this.toggleDrawer()
    NavigationActions.apiTesting()
  }

  handlePressTheme = () => {
    this.toggleDrawer()
    NavigationActions.theme()
  }

  handlePressDevice = () => {
    this.toggleDrawer()
    NavigationActions.deviceInfo()
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image source={Images.logo} style={styles.logo} />
          <DrawerButton text='글쓰기' onPress={this.handlePressComponents} />
          <DrawerButton text='내가 쓴 글' onPress={this.handlePressUsage} />
          <DrawerButton text='채팅방' onPress={this.handlePressAPI} />
        </ScrollView>
      </View>
    )
  }

}

DrawerContent.propTypes = {
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
