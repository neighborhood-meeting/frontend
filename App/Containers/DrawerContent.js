import React, { PropTypes } from 'react'
import { View } from 'react-native'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

import { categories } from '../Commons/Categories'

import styles from './Styles/DrawerContentStyle'

class DrawerContent extends React.Component {
  static contextTypes = {
    drawer: PropTypes.object
  }

  static propTypes = {
    categories: PropTypes.array
  }

  static defaultProps = {
    categories: categories
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressMyArticles = () => {
    this.toggleDrawer()
    NavigationActions.refresh()
  }

  handlePressCategory = (type) => {
    this.toggleDrawer()
    NavigationActions.refresh({ categoryType: type })
  }

  render () {
    return (
      <View style={styles.container}>
        <DrawerButton text='내가 쓴 글' onPress={this.handlePressMyArticles} />
        <DrawerButton text='카테고리별 보기' onPress={this.handlePressCategory} />
        {this.createCategoryButtons()}
      </View>
    )
  }

  createCategoryButtons = () => {
    return categories.map((category) => (
      <DrawerButton
        key={category.type}
        text={category.name}
        icon={category.icon}
        onPress={() => this.handlePressCategory(category.type)} />
    ))
  }

}

export default DrawerContent
