import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  listContent: {
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  row: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.snow,
    marginTop: Metrics.mediumMargin
  },

  categoryBlock: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentBlock: {
    flex: 1,
    flexDirection: 'row',
    marginTop: Metrics.smallMargin
  },
  bottomBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.smallMargin
  },

  categoryIcon: {
    width: Metrics.icons.tiny,
    height: Metrics.icons.tiny,
    tintColor: Colors.text,
    resizeMode: 'contain'
  },
  categoryIconText: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.regular,
    marginLeft: Metrics.tinyMargin
  },
  timeText: {
    ...Fonts.style.time,
    marginLeft: Metrics.tinyMargin * 2
  },

  contentTextBlock: {
    flex: 1,
    justifyContent: 'center'
  },
  contentTitle: {
    ...Fonts.style.normal,
    color: Colors.orange
  },
  contents: {
    ...Fonts.style.normal,
    marginTop: 3
  },
  contentMainImage: {
    width: Metrics.images.large,
    height: Metrics.images.large,
    resizeMode: 'cover',
    marginLeft: Metrics.baseMargin
  },

  writerBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  writerImage: {
    width: Metrics.images.little,
    height: Metrics.images.little,
    borderRadius: Metrics.images.little / 2
  },
  writerText: {
    ...Fonts.style.little,
    marginLeft: Metrics.smallMargin
  },
  replyText: {
    ...Fonts.style.little,
    textDecorationLine: 'underline'
  }
})
