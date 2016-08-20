import React, { PropTypes } from 'react'
import { View, Text, Image, ListView, TouchableOpacity } from 'react-native'

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

  _renderRow = (rowData) => {
    return (
      <TouchableOpacity onPress={() => this.props.onPress(rowData)}>
        <View style={styles.row}>
          <View style={styles.imageBox}>
            <Image source={{uri: rowData.articleMainImage}} style={styles.image} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.boldLabel}>
              {rowData.name}
            </Text>
            <Text style={styles.label}>
              {rowData.content}
            </Text>
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
    if (articles.length === 0) {
      console.log('empty')
      articles = []
    }
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
