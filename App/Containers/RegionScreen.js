import React, { PropTypes } from 'react'
import { View } from 'react-native'
// import { Images } from '../Themes'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

import RegisterButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/FontAwesome'

import Notice from '../Components/Notice'
import ArticleListView from '../Components/ArticleListView'
import { categories } from '../Commons/Categories'
// Styles
import styles from './Styles/RegionScreenStyle'
import { Colors, Metrics } from '../Themes'

class RegionScreen extends React.Component {

  static propTypes = {
    region: PropTypes.object.isRequired,
    fetchArticles: PropTypes.func.isRequired,
    toArticle: PropTypes.func.isRequired,
    articles: PropTypes.array
  }

  componentDidMount () {
    const { region, fetchArticles } = this.props
    region && fetchArticles(region.regionId)
  }

  render () {
    const {region, articles} = this.props
    const notice = region.notice && (<Notice notice={region.notice} />)
    return (
      <View style={styles.mainContainer}>
        {notice}
        <View style={styles.articleListBlock}>
          <ArticleListView articles={articles} onPress={this.handleArticlePress} />
        </View>
        {this.createRegisterButton()}
      </View>
    )
  }

  createRegisterButton = () => {
    const items = categories.map((category) => {
      return (
        <RegisterButton.Item
          key={category.type}
          buttonColor={Colors.snow}
          titleBgColor={Colors.transparent}
          titleColor={Colors.snow}
          title={category.name}
          onPress={() => window.alert(category.type)}>
          <Icon
            name={category.icon}
            color={Colors.text}
            size={Metrics.icons.medium} />
        </RegisterButton.Item>
      )
    })
    return (
      <RegisterButton
        buttonColor={Colors.orange}
        position='left'
        bgColor={Colors.windowTint}
        spacing={12}>
        {items}
      </RegisterButton>
    )
  }

  handleArticlePress = (article) => {
    this.props.toArticle({ article: article, title: article.name })
  }

}

const mapStateToProps = (state) => {
  return {
    articles: state.articles.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: (regionId) => dispatch(Actions.fetchArticles(regionId)),
    toArticle: NavigationActions.article
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionScreen)
