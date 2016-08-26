import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    ...Fonts.style.title,
    fontSize: 18,
    color: Colors.snow,
    marginRight: Metrics.smallMargin
  },
  logo: {
    width: 51,
    height: 18,
    resizeMode: 'contain'
  }
})
