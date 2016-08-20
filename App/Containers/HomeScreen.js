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

const dummyUser = {
  userMainImage: 'http://image.news1.kr/system/photos/2016/5/24/1945387/article.jpg',
  userId: 1,
  username: '아이유'
}

const dummyRooms = {
  rooms: [
    {
      roomId: 1,
      title: '행복이 가득한 창전동',
      hostId: 1,
      hostName: '철수'
    },
    {
      roomId: 2,
      title: '영희네 동네 주민 모임',
      hostId: 2,
      hostName: '영희'
    },
    {
      roomId: 3,
      title: '민수 때릴 사람',
      hostId: 3,
      hostName: '민수'
    },
    {
      roomId: 4,
      title: '민성 아파트 모여라',
      hostId: 4,
      hostName: '민성'
    },
    {
      roomId: 5,
      title: '혜임네 동네 주민 모임',
      hostId: 5,
      hostName: '혜임'
    },
    {
      roomId: 6,
      title: '현정 때릴 사람',
      hostId: 6,
      hostName: '현정'
    },
    {
      roomId: 7,
      title: '행지 때릴 사람',
      hostId: 7,
      hostName: '행지'
    }
  ]
}

class HomeScreen extends React.Component {

  static propTypes = {
    toRoom: PropTypes.func,
    usageExamples: PropTypes.func,
    fetchRooms: PropTypes.func,
    rooms: PropTypes.array,
    user: PropTypes.object,
    fetchUser: PropTypes.func
  }

  componentDidMount () {
    this.props.fetchUser(dummyUser)
    this.props.fetchRooms(1, dummyRooms)
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
    return this.props.toRoom({roomId: room.roomId, title: room.title})
  }
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms.items,
    user: state.login.item
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toRoom: NavigationActions.drawer,
    usageExamples: NavigationActions.usageExamples,
    fetchRooms: (userId, dummyRooms) => dispatch(Actions.fetchRooms(userId, dummyRooms)),
    fetchUser: (dummyUser) => dispatch(Actions.fetchUser(dummyUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
