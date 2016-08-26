import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  agreement: {
    flex: 1,
    backgroundColor: '#ff7300'
  },
  image_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  all_agree_container: {
    flexDirection: 'row'
  },
  guide_container: {

  },
  selection_container: {

  },
  contents_container: {
    flex: 2,
    marginTop: 50,
    marginLeft: 40,
    marginRight: 44
  },
  logo: {
    width: 161,
    height: 59,
    resizeMode: 'contain',
    marginTop: 150,
    marginBottom: 50
  },
  backgroundImage: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  guestButton: {
    width: 200,
    height: 40,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.snow,
    justifyContent: 'center',
    borderColor: Colors.line,
    borderWidth: 1
  },
  guestButtonText: {
    color: Colors.penther,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.regular,
    marginVertical: Metrics.baseMargin
  }
})
