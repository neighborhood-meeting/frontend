import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  articleListBlock: {
    flex: 1,
    backgroundColor: Colors.background
  },
  categoryIcon: {
    width: Metrics.icons.small,
    height: Metrics.icons.small,
    tintColor: Colors.text,
    resizeMode: 'contain'
  }
})
