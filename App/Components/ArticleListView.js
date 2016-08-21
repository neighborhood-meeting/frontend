import React, { PropTypes } from 'react'
import { View, Text, Image, ListView, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

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
    const { category, writer } = rowData
    return (
      <TouchableOpacity onPress={() => this.props.onPress(rowData)}>
        <View style={styles.row}>
          <View style={styles.categoryBlock}>
            <Icon
              name='shopping-basket'
              size={Metrics.icons.tiny}
              color={Colors.panther} />
            <Text style={styles.categoryIconText}>{category && category.name}</Text>
            <Text style={styles.timeText}>{rowData.createdAt}</Text>
          </View>
          <View style={styles.contentBlock}>
            <View style={styles.contentTextBlock}>
              <Text style={styles.contentTitle}>{rowData.name}</Text>
              <Text style={styles.content}>{rowData.content}</Text>
            </View>
            <View style={styles.contentImageBlock}>
              <Image source={{uri: rowData.articleMainImage}} style={styles.contentMainImage} />
            </View>
          </View>
          <View style={styles.bottomBlock}>
            <View style={styles.writerBlock}>
              <Image source={{uri: rowData.articleMainImage}} style={styles.writerImage} />
              <Text style={styles.writerText}>{writer && writer.name}</Text>
            </View>
            <Text style={styles.replyText}>댓글 {rowData.commentCount}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
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
