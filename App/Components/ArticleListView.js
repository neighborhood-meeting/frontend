import React, { PropTypes } from 'react'
import { View, Text, Image, ListView, TouchableOpacity } from 'react-native'
import moment from 'moment'

import { getCagetory } from '../Commons/Categories'

// Styles
import styles from './Styles/ArticleListViewStyle'

export default class ArticleListView extends React.Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    onPress: PropTypes.func
  }

  constructor (props) {
    super(props)
    const rowHasChanged = (r1, r2) => r1 !== r2
    this.ds = new ListView.DataSource({rowHasChanged})
  }

  renderRow = (article) => {
    const { writer } = article
    return (
      <TouchableOpacity onPress={() => this.props.onPress(article)}>
        <View style={styles.row}>
          {this.createCategoryBlock(article)}
          <View style={styles.contentBlock}>
            <View style={styles.contentTextBlock}>
              <Text style={styles.contentTitle}>
                {article.title}
              </Text>
              <Text style={styles.contents} numberOfLines={1}>
                {article.contents}
              </Text>
            </View>
            <Image source={{uri: article.articleMainImageUrl}} style={styles.contentMainImage} />
          </View>
          <View style={styles.bottomBlock}>
            <View style={styles.writerBlock}>
              <Image source={{uri: writer.profileUrl}} style={styles.writerImage} />
              <Text style={styles.writerText}>
                {writer && writer.name}
              </Text>
            </View>
            <Text style={styles.replyText}>
              댓글 {article.commentCount}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  createCategoryBlock = (article) => {
    const { category } = article
    const categoryType = category && getCagetory(category.type)
    if (categoryType) {
      return (
        <View style={styles.categoryBlock}>
          <Image source={categoryType.image} style={styles.categoryIcon} />
          <Text style={styles.categoryIconText}>
            {categoryType.name}
          </Text>
          <Text style={styles.timeText}>
            {moment(article.createdAt).format('MM-DD')}
          </Text>
        </View>
      )
    }
  }

  noRowData = () => {
    return this.ds.dataSource.getRowCount() === 0
  }

  render () {
    let { articles } = this.props
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.ds.cloneWithRows(articles)}
          renderRow={this.renderRow}
          enableEmptySections />
      </View>
    )
  }
}
