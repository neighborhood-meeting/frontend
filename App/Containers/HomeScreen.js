import React, { PropTypes } from 'react';
import { ScrollView, Text, Image, View, ToastAndroid } from 'react-native';
import { Images } from '../Themes';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native';

import RoomButton from '../Components/RoomButton';

// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends React.Component {

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }

  componentDidMount() {
    this.fetchRooms();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
        {this.createRoomButtons()}
          </View>
      </View>
    );
  }

  createRoomButtons = () => {
    const {rooms} = this.state;
    return rooms.map((room) => {
      return <RoomButton room={room} onPress={() => this.handleRoomPress(room)}/>
    });
  };

  handleRoomPress = (room) => {
    return ToastAndroid.show(`room pressed ${room.title}`, ToastAndroid.SHORT);
  };

  fetchRooms = () => {
    this.setState({
      rooms: [
        {
          title: '1번 방',
          host: 'aa'
        },
        {
          title: '2번 방',
          host: 'bb'
        },
        {
          title: '3번 방',
          host: 'cc'
        }
      ]
    });
  };
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
