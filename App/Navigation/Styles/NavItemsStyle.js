import {StyleSheet} from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  navButtonLeft: {
    marginTop: Metrics.baseMargin + Metrics.smallMargin,
    marginLeft: Metrics.baseMargin,
    backgroundColor: Colors.transparent,
    width: Metrics.icons.medium
  },
  navButtonRight: {
    marginTop: Metrics.baseMargin + Metrics.smallMargin,
    marginRight: Metrics.baseMargin,
    backgroundColor: Colors.transparent,
    width: Metrics.icons.medium
  }
})
