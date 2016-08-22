import React, { PropTypes } from 'react'
import { Text, View, Image } from 'react-native'

import ArticleTitle from './ArticleTitle'
import ArticleBottom from './ArticleBottom'

import styles from './Styles/ArticleStyle'

export default class Article extends React.Component {

  static propTypes = {
    article: PropTypes.object
  }

  render () {
    const { article } = this.props

    return (
      <View style={styles.container}>
        <ArticleTitle article={article} />
        <View style={styles.contentBlock}>
          <Text style={styles.contentText}>{article.content}</Text>
          <Image source={{uri: article.articleMainImageUrl}} style={styles.articleMainImage} resizeMode='contain' />
        </View>
        <ArticleBottom article={article}/>
      </View>
    )
  }
}
