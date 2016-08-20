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

  _renderRow = (rowData) => {
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
              <Text style={styles.boldLabel}>
                {rowData.name}
              </Text>
              <Text style={styles.label}>
                {rowData.content}
              </Text>
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

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData = () => {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    let { articles } = this.props
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.ds.cloneWithRows(articles)}
          renderRow={this._renderRow}
          enableEmptySections />
      </View>
    )
  }
}
