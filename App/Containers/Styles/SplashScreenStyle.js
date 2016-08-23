import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../../Themes/'

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
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.silver,
    fontSize: 30,
    margin: 30
  },
  guestButton: {
    width: 200,
    height: 40,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.snow,
    justifyContent: 'center'
  },
  guestButtonText: {
    color: Colors.penther,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.regular,
    marginVertical: Metrics.baseMargin
  }
})
