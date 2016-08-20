import React, { PropTypes } from 'react'
import { ScrollView, View, ToastAndroid } from 'react-native'
// import { Images } from '../Themes'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

import Notice from '../Components/Notice'
import ArticleListView from '../Components/ArticleListView'

// Styles
import styles from './Styles/RegionScreenStyle'

const dummyRegion = {
  regionId: 1,
  name: '행복이 가득한 창전동',
  owner: {
    userId: 1,
    name: '철수'
  },
  notice: '웰컴 베베'
}

const dummyArticles = [
  {
    articleId: 1,
    name: '공구하자',
    content: '고구마를 처묵처묵',
    viewCount: 100
  },
  {
    articleId: 2,
    name: '집 봐주실분',
    content: '도둑은 사양한다',
    viewCount: 200
  }
]

class RegionScreen extends React.Component {

  static propTypes = {
    regionId: PropTypes.number.isRequired,
    fetchRegion: PropTypes.func.isRequired,
    region: PropTypes.object.isRequired,
    toArticle: PropTypes.func.isRequired,
    articles: PropTypes.array.isRequired
  }

  componentDidMount () {
    console.log(dummyArticles)
    this.props.fetchRegion(this.props.regionId, dummyRegion)
    NavigationActions.refresh({title: this.getTitle()})
  }

  componentWillReceiveProps (nextProps) {
    // StatusBar.setBackgroundColor(Colors.snow, false)
  }

  render () {
    const {region, articles} = this.props
    const notice = region.notice && (<Notice notice={region.notice} />)
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          {notice}
          <ArticleListView articles={articles} onPress={this.handleRegionPress} />
        </ScrollView>
      </View>
    )
  }

  handleRegionPress = (article) => {
    ToastAndroid.show(`article pressed ${article.title}`, ToastAndroid.SHORT)
    this.props.toArticle({articleId: article.articleId})
  }

  getTitle = () => {
    return this.props.region.title
  }
}

const mapStateToProps = (state) => {
  return {
    region: state.region
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRegion: (regionId, dummyRegion) => dispatch(Actions.fetchRegion(regionId, dummyRegion)),
    fetchArticles: (regionId, dummyArticles) => dispatch(Actions.fetchArticles(regionId, dummyArticles)),
    toArticle: NavigationActions.article
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionScreen)
