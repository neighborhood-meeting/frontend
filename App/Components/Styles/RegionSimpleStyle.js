import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.smallMargin,
    backgroundColor: Colors.snow,
    borderRadius: Metrics.smallMargin
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.panther,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
    fontSize: Fonts.size.medium
  },
  label: {
    alignSelf: 'center',
    color: Colors.panther,
    textAlign: 'center',
    fontSize: Fonts.size.small
  }
})
