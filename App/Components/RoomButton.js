import React, {PropTypes} from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../Themes/';

export default class RoomButton extends React.Component {
  static propTypes = {
    room: PropTypes.object.isRequired,
    onPress: PropTypes.func
  };

  render () {
    const {room} = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{room.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 350,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.fire,
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.h1,
    marginVertical: Metrics.baseMargin
  }
});
