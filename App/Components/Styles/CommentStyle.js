import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 20,
    backgroundColor: Colors.snow
  },
  writerImage: {
    width: Metrics.icons.medium,
    height: Metrics.icons.medium,
    borderRadius: Metrics.icons.medium / 2,
    borderColor: Colors.orange,
    borderWidth: 1
  },
  commentText: {
    flex: 1,
    marginLeft: 9,
    paddingTop: 8,
    ...Fonts.style.small,
    lineHeight: 22
  },
  commentWriter: {
    fontWeight: '800'
  },
  timeText: {
    ...Fonts.style.time,
    marginLeft: 6
  }
})
