import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  newArticleBlock: {
    backgroundColor: Colors.snow,
    paddingHorizontal: Metrics.doubleBaseMargin,
    paddingVertical: Metrics.regularMargin
  },
  categoryBlock: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  categoryIcon: {
    width: Metrics.icons.tiny,
    height: Metrics.icons.tiny,
    tintColor: Colors.text,
    resizeMode: 'contain'
  },
  categoryText: {
    ...Fonts.style.title,
    marginLeft: 6
  },

  contentBlock: {
    flex: 1,
    marginTop: Metrics.baseMargin
  },
  articleTitle: {
    ...Fonts.style.normal,
    height: 40
  },
  articleContents: {
    ...Fonts.style.normal,
    marginTop: 20,
    marginBottom: Metrics.baseMargin
  },

  imageBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.doubleBaseMargin,
    paddingBottom: Metrics.regularMargin,
    borderBottomColor: Colors.line,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  imageAddButton: {
    width: 70,
    height: 70,
    backgroundColor: Colors.background
  },

  bottomBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Metrics.tinyMargin * 2
  },
  cameraIcon: {
    width: 27,
    height: 22,
    tintColor: Colors.orange
  },
  registerButtonBlock: {
    width: 98,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.orange
  },
  registerButton: {
    ...Fonts.style.title,
    color: Colors.snow
  }
})
