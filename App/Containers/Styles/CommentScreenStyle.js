import { StyleSheet } from 'react-native'
import { Colors, Fonts, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  commentInputBlock: {
    height: 45,
    paddingLeft: 20,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.snow,
    borderBottomColor: Colors.line,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  textInput: {
    flex: 1,
    ...Fonts.style.normal
  },
  registerButton: {
    width: 56,
    height: 29,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.orange
  },
  registerButtonText: {
    ...Fonts.style.normal,
    color: Colors.snow,
    textAlign: 'center'
  },
  commentListMargin: {
    height: 14,
    backgroundColor: Colors.background
  },
  commentListBlock: {
    flex: 1,
    backgroundColor: Colors.snow
  }
})
