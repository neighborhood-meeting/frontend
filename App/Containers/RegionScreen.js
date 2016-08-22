import React, { PropTypes } from 'react'
import { View } from 'react-native'
// import { Images } from '../Themes'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

import Notice from '../Components/Notice'
import ArticleListView from '../Components/ArticleListView'

// Styles
import styles from './Styles/RegionScreenStyle'

// const dummyArticles = [
//   {
//     articleId: 1,
//     name: '황금고구마, 1kg 3500, 4명',
//     content: '쿠팡에서 5kg 황금고구마 같이 나눠서 사요! 쿠팡에서 5kg 황금고구마 같이 나눠서 사요! 쿠팡에서 5kg 황금고구마 같이 나눠서 사요!',
//     viewCount: 100,
//     articleMainImageUrl: 'http://cfile21.uf.tistory.com/image/215F5E3F562081A80A1896',
//     writer: {
//       userId: 1,
//       name: '쿠키즈',
//       profileUrl: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'
//     },
//     commentCount: 8,
//     category: {
//       categoryId: 1,
//       type: 'HELLO'
//     },
//     createdAt: '2016-08-21 06:27'
//   },
//   {
//     articleId: 2,
//     name: '집 봐주실분',
//     content: '도둑은 사양한다',
//     viewCount: 200,
//     articleMainImageUrl: 'http://cfile21.uf.tistory.com/image/215F5E3F562081A80A1896',
//     writer: {
//       userId: 1,
//       name: '쿠키즈',
//       profileUrl: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'
//     },
//     commentCount: 8,
//     category: {
//       categoryId: 1,
//       type: 'FREE'
//     },
//     createdAt: '2016-08-21 06:27'
//   },
//   {
//     articleId: 1,
//     name: '공구하자',
//     content: '고구마를 처묵처묵',
//     viewCount: 100,
//     articleMainImageUrl: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg',
//     writer: {
//       userId: 1,
//       name: '쿠키즈',
//       profileUrl: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'
//     },
//     commentCount: 8,
//     category: {
//       categoryId: 1,
//       type: 'SHOPPING'
//     },
//     createdAt: '2016-08-21 06:27'
//   },
//   {
//     articleId: 2,
//     name: '집 봐주실분',
//     content: '도둑은 사양한다',
//     viewCount: 200,
//     articleMainImageUrl: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg',
//     writer: {
//       userId: 1,
//       name: '쿠키즈',
//       profileUrl: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'
//     },
//     commentCount: 8,
//     category: {
//       categoryId: 1,
//       type: 'LIGHTNING'
//     },
//     createdAt: '2016-08-21 06:27'
//   },
//   {
//     articleId: 1,
//     name: '공구하자',
//     content: '고구마를 처묵처묵',
//     viewCount: 100,
//     articleMainImageUrl: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg',
//     writer: {
//       userId: 1,
//       name: '쿠키즈',
//       profileUrl: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'
//     },
//     commentCount: 8,
//     category: {
//       categoryId: 1,
//       type: 'HELP'
//     },
//     createdAt: '2016-08-21 06:27'
//   },
//   {
//     articleId: 2,
//     name: '집 봐주실분',
//     content: '도둑은 사양한다',
//     viewCount: 200,
//     articleMainImageUrl: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg',
//     writer: {
//       userId: 1,
//       name: '쿠키즈',
//       profileUrl: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'
//     },
//     commentCount: 8,
//     category: {
//       categoryId: 1,
//       type: 'HELLO'
//     },
//     createdAt: '2016-08-21 06:27'
//   }
// ]

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
      </View>
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
