import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../../Themes/'


export default StyleSheet.create({
  ...ApplicationStyles.screen,

  guestButton: {
    width: 200,
    height: 50,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.orange,
    justifyContent: 'center'
  },

  guestButtonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.regular,
    marginVertical: Metrics.baseMargin
  },

  loginImage: {
    flex:1
  },

  input: {
    flex:2,
    justifyContent: 'center',

  },

  login: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});