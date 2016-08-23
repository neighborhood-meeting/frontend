import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  navButtonLeft: {
    marginLeft: Metrics.baseMargin,
    backgroundColor: Colors.transparent,
    width: Metrics.icons.medium
  },
  navButtonRight: {
    marginRight: Metrics.baseMargin,
    backgroundColor: Colors.transparent,
    width: Metrics.icons.medium
  },
  navDelButton: {
    marginLeft: Metrics.baseMargin + Metrics.smallMargin,
    backgroundColor: Colors.transparent,
    width: Metrics.icons.small,
    height: Metrics.icons.small
  }
})
