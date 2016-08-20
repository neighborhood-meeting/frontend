import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  profileBox: {
    height: 300,
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    height: 140,
    width: 140,
    borderRadius: 70,
    resizeMode: 'cover'
  },
  profileText: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.snow
  },
  centered: {
    alignItems: 'center'
  }
})
