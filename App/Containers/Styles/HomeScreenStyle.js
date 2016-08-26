import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    alignItems: 'center'
  },
  topBlock: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    flex: 1,
    height: 191,
    backgroundColor: Colors.orange,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  backgroundImage: {
    width: Metrics.screenWidth,
    height: 179
  },
  logo: {
    width: 88,
    height: 32,
    resizeMode: 'contain',
    marginTop: 16
  },
  profileImageBlock: {
    height: 104,
    width: 104,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 90
  },
  profileImage: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    height: 104,
    width: 104,
    borderRadius: 52,
    resizeMode: 'cover'
  },
  cameraButton: {
    height: 28,
    width: 28,
    borderRadius: 14,
    backgroundColor: Colors.orange,
    marginRight: 7,
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    tintColor: Colors.snow
  },
  profileText: {
    fontFamily: 'NanumBarunGothicBold',
    fontSize: 19,
    color: Colors.orange,
    marginTop: 11,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  bottomBlockWrapper: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 39
  },
  editButton: {
    width: 80,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: Colors.orange,
    justifyContent: 'center'
  },
  editText: {
    ...Fonts.style.normal,
    fontSize: 17,
    color: Colors.orange,
    alignSelf: 'center',
    textAlign: 'center'
  },
  regionBox: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50
  },
  regionList: {
    height: 300,
    alignItems: 'center'
  }
})
