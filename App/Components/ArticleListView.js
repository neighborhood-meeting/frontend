import React, { PropTypes } from 'react'
import { View, Text, Image, ListView, TouchableOpacity } from 'react-native'
import moment from 'moment'

import Icon from 'react-native-vector-icons/FontAwesome'

import { getCagetory } from '../Commons/Categories'

// Styles
import styles from './Styles/ArticleListViewStyle'
import { Metrics, Colors } from '../Themes'

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

  renderRow = (rowData) => {
    const { writer } = rowData
    return (
      <TouchableOpacity onPress={() => this.props.onPress(rowData)}>
        <View style={styles.row}>
          {this.createCategoryBlock(rowData)}
          <View style={styles.contentBlock}>
            <View style={styles.contentTextBlock}>
              <Text style={styles.contentTitle}>
                {rowData.name}
              </Text>
              <Text style={styles.content} numberOfLines={2}>
                {rowData.content}
              </Text>
            </View>
            <View style={styles.contentImageBlock}>
              <Image source={{uri: rowData.articleMainImageUrl}} style={styles.contentMainImage} />
            </View>
          </View>
          <View style={styles.bottomBlock}>
            <View style={styles.writerBlock}>
              <Image source={{uri: writer.profileUrl}} style={styles.writerImage} />
              <Text style={styles.writerText}>
                {writer && writer.name}
              </Text>
            </View>
            <Text style={styles.replyText}>
              댓글
              {rowData.commentCount}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  createCategoryBlock = (rowData) => {
    const { category } = rowData
    const categoryType = category && getCagetory(category.type)
    if (categoryType) {
      return (
        <View style={styles.categoryBlock}>
          <Icon name={categoryType.icon} size={Metrics.icons.tiny} color={Colors.panther} />
          <Text style={styles.categoryIconText}>
            {categoryType.name}
          </Text>
          <Text style={styles.timeText}>
            {moment(rowData.createdAt).format('MM-DD')}
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
