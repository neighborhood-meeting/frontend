import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    width: 300,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.smallMargin,
    backgroundColor: Colors.snow,
    borderRadius: Metrics.smallMargin
  },
  regionTitle: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.panther,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
    fontSize: Fonts.size.medium
  },
  noticeText: {
    alignSelf: 'center',
    color: Colors.panther,
    textAlign: 'center',
    fontSize: Fonts.size.small
  }
})
