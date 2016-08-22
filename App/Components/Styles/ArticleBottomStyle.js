import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  bottomBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 11,
    paddingHorizontal: 27,
    borderBottomColor: Colors.line,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  bottomButtonBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  joinIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain'
  },
  commentIcon: {
    width: 26,
    height: 17,
    resizeMode: 'contain'
  },
  shareIcon: {
    width: 14,
    height: 20,
    resizeMode: 'contain'
  },
  bottomButtonText: {
    ...Fonts.style.small,
    marginLeft: 5
  }
})
