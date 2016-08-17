import React, { PropTypes } from 'react'
import { ScrollView, View, Image, Text, StatusBar } from 'react-native'
// import { Images } from '../Themes'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

import RoomInfo from '../Components/RoomInfo'

// Styles
import styles from './Styles/HomeScreenStyle'
import { Colors } from '../Themes'

class HomeScreen extends React.Component {

  static propTypes = {
    toRoomMain: PropTypes.func,
    usageExamples: PropTypes.func,
    fetchRoomList: PropTypes.func,
    rooms: PropTypes.array,
    user: PropTypes.object,
    fetchUser: PropTypes.func
  }

  componentDidMount () {
    this.fetchRooms()
    this.props.fetchUser()
  }

  componentWillReceiveProps (nextProps) {
    // StatusBar.setBackgroundColor(Colors.orange, false)
  }

  render () {
    const { user } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.profileBox}>
          <Image source={{uri: user.userMainImage}} style={styles.profileImage} />
          <Text style={styles.profileText}>{user.username}</Text>
        </View>
        <ScrollView style={styles.container}>
          {this.createRoomInfos()}
        </ScrollView>
      </View>
    )
  }

  createRoomInfos = () => {
    const {rooms} = this.props
    return rooms.map((room, i) => {
      return <RoomInfo key={i} room={room} onPress={() => this.handleRoomPress(room, i)} />
    })
  }

  handleRoomPress = (room, i) => {
    if (i === 2) {
      return this.props.usageExamples()
    }
    return this.props.toRoomMain({roomId: room.roomId, title: room.title})
  }

  fetchRooms = (userId) => {
    this.props.fetchRoomList(userId)
  }

}

const mapStateToProps = (state) => {
  return {
    rooms: state.roomList.rooms,
    user: state.login.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toRoomMain: NavigationActions.drawer,
    usageExamples: NavigationActions.usageExamples,
    fetchRoomList: (userId) => dispatch(Actions.fetchRoomList(userId)),
    fetchUser: () => dispatch(Actions.fetchUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
