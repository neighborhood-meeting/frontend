import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  splash: {
    flex: 1,
    backgroundColor: Colors.transparent,
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 161,
    height: 59,
    resizeMode: 'contain',
    marginBottom: 80
  },
  guestButton: {
    width: 200,
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: Colors.snow,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.line,
    borderWidth: 1
  },
  guestButtonText: {
    ...Fonts.style.title,
    textAlign: 'center'
  }
})
