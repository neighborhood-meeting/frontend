import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent,
    borderBottomColor: Colors.line,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  titleBlock: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderBottomColor: Colors.line,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  contentBlock: {
    padding: 25,
    alignItems: 'stretch'
  },
  contentText: {

  },
  articleMainImage: {

  },
  writerBlock: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  replyBlock: {
    flex: 1,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.line,
    borderWidth: 1,
    borderRadius: 15
  },
  writerImage: {
    width: Metrics.images.medium,
    height: Metrics.images.medium,
    borderRadius: Metrics.images.medium / 2
  },
  writerName: {
    fontWeight: 'bold',
    color: Colors.panther,
    marginLeft: Metrics.baseMargin
  },
  timeText: {
    fontSize: Fonts.size.tiny,
    marginLeft: Metrics.smallMargin
  },
  replyText: {
    borderColor: Colors.line,
    alignSelf: 'center',
    textAlign: 'center'
  }
})
