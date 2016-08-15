import React, { PropTypes } from 'react';
import { ScrollView, Text, Image, View, ToastAndroid } from 'react-native';
import { Images } from '../Themes';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native';
import Actions from '../Actions/Creators';

import RoomInfo from '../Components/RoomInfo';
import Notice from '../Components/Notice';
import RoomContentList from '../Components/RoomContentList';

// Styles
import styles from './Styles/HomeScreenStyle';

class RoomMainScreen extends React.Component {

  static propTypes = {
    roomId: PropTypes.number.isRequired,
    fetchRoomMain: PropTypes.func.isRequired,
    room: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoomMain();
    NavigationActions.refresh({title: this.getTitle()})
  }

  render() {
    const {room} = this.props;

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <Notice notice={room.notice}/>
          <RoomContentList/>
        </ScrollView>
      </View>
    );
  }

  handleRoomPress = (room) => {
    return ToastAndroid.show(`room pressed ${room.title}`, ToastAndroid.SHORT);
  };

  getTitle = () => {
    return this.props.room.title;
  };
}

const mapStateToProps = (state) => {
  return {
    room: state.room
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoomMain: (roomId) => dispatch(Actions.fetchRoomMain(roomId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomMainScreen);
