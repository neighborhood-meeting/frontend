import React, { PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
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
    toNewArticle: PropTypes.func.isRequired,
    articles: PropTypes.array,
    category: PropTypes.object
  }

  static defaultProps = {
    region: {},
    articles: [],
    category: {}
  }

  componentDidMount () {
    const { region, fetchArticles, category } = this.props
    const data = {
      regionId: region.regionId,
      categoryType: category.type
    }
    fetchArticles(data)
  }

  render () {
    const {region, articles} = this.props
    const articleList = articles.length
      ? (<ArticleListView articles={articles} onPress={this.handleArticlePress} />)
      : (
        <View style={styles.defaultBlock}>
          <Text style={styles.defaultText}>등록된 글이 없습니다..</Text>
          <Text style={styles.defaultText}>왼쪽 아래 버튼으로 만들어주세요!!</Text>
        </View>
      )
    return (
      <View style={styles.mainContainer}>
        <Notice notice={region.notice} />
        <View style={styles.articleListBlock}>
          {articleList}
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
    this.props.toArticle({ article: article })
  }

}

const mapStateToProps = (state, props) => {
  const { category = {} } = props
  const { articles } = state

  let filtered = [...articles.items]
  if (category.type) {
    filtered = filtered.filter((article) => {
      if (article.category && article.category.type === category.type) {
        return article
      }
    })
  }
  return {
    articles: filtered
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: (data) => dispatch(Actions.fetchArticles(data)),
    toArticle: NavigationActions.article,
    toNewArticle: NavigationActions.newArticle
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionScreen)
