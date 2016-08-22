import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  titleBlock: {
    height: 53,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.line,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  writerBlock: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  commentBlock: {
    width: 45,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.line,
    borderWidth: 1,
    borderRadius: 15
  },
  writerImage: {
    width: Metrics.images.small,
    height: Metrics.images.small,
    borderRadius: Metrics.images.small / 2
  },
  writerName: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    marginLeft: 7
  },
  timeText: {
    ...Fonts.style.time,
    marginLeft: 6
  },
  commentText: {
    ...Fonts.style.little,
    borderColor: Colors.line,
    alignSelf: 'center',
    textAlign: 'center'
  }
})
