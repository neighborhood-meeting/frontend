import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  listContent: {
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: Metrics.smallMargin
  },
  row: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'stretch',
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin
  },

  categoryBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentBlock: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    marginTop: Metrics.smallMargin
  },
  bottomBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    marginTop: Metrics.tinyMargin
  },

  categoryIconText: {
    color: Colors.panther,
    marginLeft: Metrics.smallMargin
  },
  timeText: {
    fontSize: Fonts.size.tiny,
    marginLeft: Metrics.smallMargin
  },

  contentTextBlock: {
    flex: 1
  },
  contentTitle: {
    fontWeight: 'bold',
    color: Colors.orange,
    marginTop: Metrics.tinyMargin
  },
  contents: {
    color: Colors.panther,
    marginTop: Metrics.tinyMargin
  },

  contentImageBlock: {
    alignItems: 'center'
  },
  contentMainImage: {
    width: Metrics.images.large,
    height: Metrics.images.large,
    resizeMode: 'cover'
  },

  writerBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  writerImage: {
    width: Metrics.images.tiny,
    height: Metrics.images.tiny,
    borderRadius: Metrics.images.tiny / 2
  },
  writerText: {
    fontSize: Fonts.size.small,
    marginLeft: Metrics.smallMargin
  },
  replyText: {
    alignSelf: 'center',
    fontSize: Fonts.size.small,
    textAlign: 'right',
    textDecorationLine: 'underline'
  }
})
