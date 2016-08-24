import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    height: 43,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.snow,
    paddingHorizontal: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.line,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  noticeBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Metrics.regularMargin
  },
  iconBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  expandButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  noticeIcon: {
    width: Metrics.icons.tiny,
    height: Metrics.icons.tiny
  },
  iconText: {
    ...Fonts.style.normal,
    color: Colors.orange,
    marginLeft: Metrics.smallMargin
  },
  noticeContents: {
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.panther
  }
})
