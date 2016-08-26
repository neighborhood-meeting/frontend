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
  signup_container: {
    marginTop: 80,
    flex: 1,
    alignItems: 'center'
  },
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sexButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: 90,
    borderRadius: 15,
    borderWidth: 0
  }
})
