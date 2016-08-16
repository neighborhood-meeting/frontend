import React, { PropTypes } from 'react'
import { ScrollView, View } from 'react-native'
// import { Images } from '../Themes'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

import RoomInfo from '../Components/RoomInfo'

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends React.Component {

  static propTypes = {
    toRoomMain: PropTypes.func,
    usageExamples: PropTypes.func,
    fetchRoomList: PropTypes.func,
    rooms: PropTypes.array
  }

  componentDidMount () {
    this.fetchRooms()
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {this.createRoomInfos()}
        </ScrollView>
      </View>
    )
  }

  createRoomInfos = () => {
    const {rooms} = this.props
    return rooms.map((room, i) => {
      return <RoomInfo room={room} onPress={() => this.handleRoomPress(room, i)} />
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
    rooms: state.roomList.rooms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toRoomMain: NavigationActions.drawer,
    usageExamples: NavigationActions.usageExamples,
    fetchRoomList: (userId) => dispatch(Actions.fetchRoomList(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
