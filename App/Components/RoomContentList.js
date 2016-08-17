import React from 'react'
import { View, Text, Image, ListView } from 'react-native'

// Styles
import styles from './Styles/RoomContentListStyle'

export default class RoomContentList extends React.Component {

  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = [
      {title: '황금 고구마', description: '맛있음 공구하자', image: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'},
      {title: '황금 고구마', description: '맛있음 공구하자', image: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'},
      {title: 'Third Title', description: 'Third Description', image: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'},
      {title: 'Fourth Title', description: 'Fourth Description', image: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'},
      {title: 'Fifth Title', description: 'Fifth Description', image: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'},
      {title: 'Sixth Title', description: 'Sixth Description', image: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'},
      {title: 'Seventh Title', description: 'Seventh Description', image: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg'}
    ]

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow (rowData) {
    return (
      <View style={styles.row}>
        <View style={styles.imageBox}>
          <Image source={{uri: rowData.image}} style={styles.image}/>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.boldLabel}>
            {rowData.title}
          </Text>
          <Text style={styles.label}>
            {rowData.description}
          </Text>
        </View>
      </View>
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
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView contentContainerStyle={styles.listContent} dataSource={this.state.dataSource} renderRow={this._renderRow} />
      </View>
    )
  }
}
