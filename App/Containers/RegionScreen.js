import React, { PropTypes } from 'react'
import { View, Image } from 'react-native'
// import { Images } from '../Themes'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

import RegisterButton from 'react-native-action-button'

import Notice from '../Components/Notice'
import ArticleListView from '../Components/ArticleListView'
import { categories } from '../Commons/Categories'
// Styles
import styles from './Styles/RegionScreenStyle'
import { Colors } from '../Themes'

class RegionScreen extends React.Component {

  static propTypes = {
    region: PropTypes.object.isRequired,
    fetchArticles: PropTypes.func.isRequired,
    toArticle: PropTypes.func.isRequired,
    articles: PropTypes.array,
    toNewArticle: PropTypes.func.isRequired
  }

  componentDidMount () {
    const { region, fetchArticles } = this.props
    region && fetchArticles(region.regionId)
  }

  render () {
    const {region, articles} = this.props
    return (
      <View style={styles.mainContainer}>
        <Notice notice={region.notice} />
        <View style={styles.articleListBlock}>
          <ArticleListView articles={articles} onPress={this.handleArticlePress} />
        </View>
        {this.createRegisterButton()}
      </View>
    )
  }

  createRegisterButton = () => {
    const { toNewArticle, region } = this.props
    const items = categories.map((category) => {
      return (
        <RegisterButton.Item
          key={category.type}
          buttonColor={Colors.snow}
          titleBgColor={Colors.transparent}
          titleColor={Colors.snow}
          title={category.name}
          onPress={() => toNewArticle({ category: category, region: region })}>
          <Image source={category.image} style={styles.categoryIcon} />
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
    this.props.toArticle({ article: article, title: article.title })
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
    toArticle: NavigationActions.article,
    toNewArticle: NavigationActions.newArticle
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionScreen)
