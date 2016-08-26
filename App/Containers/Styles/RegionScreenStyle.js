import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/'

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
  },
  defaultBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  defaultText: {
    ...Fonts.style.regular,
    fontSize: 20
  }
})
