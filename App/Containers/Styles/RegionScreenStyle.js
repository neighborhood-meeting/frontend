import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  articleListBlock: {
    flex: 1,
    backgroundColor: Colors.background
  }
})
