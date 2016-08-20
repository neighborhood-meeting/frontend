import React, { PropTypes } from 'react'
import { ScrollView, View, ToastAndroid } from 'react-native'
// import { Images } from '../Themes'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

import Notice from '../Components/Notice'
import ArticleListView from '../Components/ArticleListView'

// Styles
import styles from './Styles/RoomScreenStyle'

const dummyRoom = {
  roomId: 1,
  title: '행복이 가득한 창전동',
  hostId: 1,
  hostName: '철수',
  notice: {
    userId: 2,
    userName: '영희',
    text: '웰컴 베베'
  }
}

class RoomScreen extends React.Component {

  static propTypes = {
    roomId: PropTypes.number.isRequired,
    fetchRoom: PropTypes.func.isRequired,
    room: PropTypes.object.isRequired,
    toArticle: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.fetchRoom(this.props.roomId, dummyRoom)
    NavigationActions.refresh({title: this.getTitle()})
  }

  componentWillReceiveProps (nextProps) {
    // StatusBar.setBackgroundColor(Colors.snow, false)
  }

  render () {
    const {room} = this.props

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <Notice notice={room.notice} />
          <ArticleListView onPress={this.handleRoomPress} />
        </ScrollView>
      </View>
    )
  }

  handleRoomPress = (article) => {
    ToastAndroid.show(`article pressed ${article.title}`, ToastAndroid.SHORT)
    this.props.toArticle({articleId: article.articleId})
  }

  getTitle = () => {
    return this.props.room.title
  }
}

const mapStateToProps = (state) => {
  return {
    room: state.room
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoom: (roomId, dummyRoom) => dispatch(Actions.fetchRoom(roomId, dummyRoom)),
    toArticle: NavigationActions.article
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen)
