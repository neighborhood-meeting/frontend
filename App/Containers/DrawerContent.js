import React, { PropTypes } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

import { categories } from '../Commons/Categories'

import styles from './Styles/DrawerContentStyle'

class DrawerContent extends React.Component {
  static contextTypes = {
    drawer: PropTypes.object
  }

  static propTypes = {
    categories: PropTypes.array,
    user: PropTypes.object,
    region: PropTypes.object,
    fetchArticles: PropTypes.func
  }

  static defaultProps = {
    categories: categories,
    user: {}
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressMyArticles = () => {
    this.toggleDrawer()
    const { user, fetchArticles } = this.props
    const data = {
      userId: user.userId
    }
    fetchArticles(data)
      .then(() => {
        NavigationActions.refresh({ category: {} })
      })
  }

  handlePressCategory = (category = {}) => {
    const { region } = this.props
    this.toggleDrawer()
    NavigationActions.refresh({ region: region, category: category })
  }

  render () {
    return (
      <View style={styles.container}>
        <DrawerButton text='내가 쓴 글' onPress={this.handlePressMyArticles} />
        <DrawerButton text='카테고리별 보기' onPress={() => this.handlePressCategory()} />
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
        onPress={() => this.handlePressCategory(category)} />
    ))
  }

}

const mapStateToProps = (state, props) => {
  return {
    user: state.login.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: (data) => dispatch(Actions.fetchArticles(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
