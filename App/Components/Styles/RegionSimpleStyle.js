import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    width: 282,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
    backgroundColor: '#e1e1e1',
    borderRadius: 28
  },
  regionIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.orange,
    marginLeft: 15
  },
  memberNumber: {
    ...Fonts.style.small,
    marginLeft: 9
  },
  regionTitle: {
    ...Fonts.style.title,
    fontSize: 18,
    alignSelf: 'center',
    marginLeft: 16
  },
  noticeText: {
    alignSelf: 'center',
    color: Colors.panther,
    textAlign: 'center',
    fontSize: Fonts.size.small
  }
})
