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
    name: '황금고구마, 1kg 3500, 4명',
    content: '쿠팡에서 5kg 황금고구마 같이 나눠서 사요! 쿠팡에서 5kg 황금고구마 같이 나눠서 사요! 쿠팡에서 5kg 황금고구마 같이 나눠서 사요!',
    viewCount: 100,
    articleMainImage: 'http://cfile21.uf.tistory.com/image/215F5E3F562081A80A1896',
    writer: {
      userId: 1,
      name: '쿠키즈',
      userMainImage: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'
    },
    commentCount: 8,
    category: {
      categoryId: 1,
      name: '공구해요'
    },
    createdAt: '2016-08-21 06:27'
  },
  {
    articleId: 2,
    name: '집 봐주실분',
    content: '도둑은 사양한다',
    viewCount: 200,
    articleMainImage: 'http://cfile21.uf.tistory.com/image/215F5E3F562081A80A1896',
    writer: {
      userId: 1,
      name: '쿠키즈',
      userMainImage: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'
    },
    commentCount: 8,
    category: {
      categoryId: 1,
      name: '공구해요'
    },
    createdAt: '2016-08-21 06:27'
  },
  {
    articleId: 1,
    name: '공구하자',
    content: '고구마를 처묵처묵',
    viewCount: 100,
    articleMainImage: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg',
    writer: {
      userId: 1,
      name: '쿠키즈',
      userMainImage: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'
    },
    commentCount: 8,
    category: {
      categoryId: 1,
      name: '공구해요'
    },
    createdAt: '2016-08-21 06:27'
  },
  {
    articleId: 2,
    name: '집 봐주실분',
    content: '도둑은 사양한다',
    viewCount: 200,
    articleMainImage: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg',
    writer: {
      userId: 1,
      name: '쿠키즈',
      userMainImage: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'
    },
    commentCount: 8,
    category: {
      categoryId: 1,
      name: '공구해요'
    },
    createdAt: '2016-08-21 06:27'
  },
  {
    articleId: 1,
    name: '공구하자',
    content: '고구마를 처묵처묵',
    viewCount: 100,
    articleMainImage: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg',
    writer: {
      userId: 1,
      name: '쿠키즈',
      userMainImage: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'
    },
    commentCount: 8,
    category: {
      categoryId: 1,
      name: '공구해요'
    },
    createdAt: '2016-08-21 06:27'
  },
  {
    articleId: 2,
    name: '집 봐주실분',
    content: '도둑은 사양한다',
    viewCount: 200,
    articleMainImage: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg',
    writer: {
      userId: 1,
      name: '쿠키즈',
      userMainImage: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'
    },
    commentCount: 8,
    category: {
      categoryId: 1,
      name: '공구해요'
    },
    createdAt: '2016-08-21 06:27'
  }
]

class RegionScreen extends React.Component {

  static propTypes = {
    regionId: PropTypes.number.isRequired,
    fetchRegion: PropTypes.func.isRequired,
    fetchArticles: PropTypes.func.isRequired,
    toArticle: PropTypes.func.isRequired,
    region: PropTypes.object,
    articles: PropTypes.array
  }

  componentDidMount () {
    this.props.fetchRegion(this.props.regionId, dummyRegion)
    this.props.fetchArticles(this.props.regionId, dummyArticles)
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
    this.props.toArticle({ articleId: article.articleId, title: article.name })
  }

}

const mapStateToProps = (state) => {
  return {
    region: state.region.item,
    regionId: 1,
    articles: state.articles.items
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
