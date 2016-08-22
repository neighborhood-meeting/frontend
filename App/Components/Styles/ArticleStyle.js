import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  contentBlock: {
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomColor: Colors.line,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  contentText: {
    ...Fonts.style.normal
  },
  articleMainImage: {
    marginTop: Metrics.baseMargin,
    width: 320,
    height: 220
  }
})
