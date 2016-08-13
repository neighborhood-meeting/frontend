import { StyleSheet } from 'react-native';
import { Colors, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  splash: {
    flex: 1,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain'
  },
  backgroundImage: {
    backgroundColor: Colors.facebook,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  text: {
    color: Colors.silver,
    fontSize: 30,
    margin: 30
  }
});
